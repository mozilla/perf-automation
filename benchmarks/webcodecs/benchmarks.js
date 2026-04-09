const DEFAULT_PARAMS = {
  width: 640,
  height: 480,
  bitrate: 1000000, // 1 Mbps
  framerate: 30,
  sources: ["canvas"],
  pixelFormats: ["RGBX"],
  latencyModes: ["realtime", "quality"],
  codecList: [
    { codec: "av01.0.04M.08" },
    { codec: "vp8" },
    { codec: "vp09.00.10.08" },
    // H264 baseline
    { codec: "avc1.42001E", avc: { format: "avc" } },
    { codec: "avc1.42001E", avc: { format: "annexb" } }
  ]
};

const TOTAL_DURATION = 3000; // ms
const KEY_FRAME_INTERVAL = 15; // 1 key every 15 frames

addTestsLoader(async function() {
  const { configList, width, height, framerate, bitrate, pixelFormats, sources } =
    parseParamsFromURL();

  const fps = framerate;
  const frameDuration = Math.round(1000 / fps);
  const frameCount = Math.floor(TOTAL_DURATION / frameDuration) + 1;

  let testcases = [];

  // Filter to configs the browser actually supports.
  let supportedConfigs = [];
  for (const c of configList) {
    let config = { ...c, width, height, bitrate, framerate };
    const support = await VideoEncoder.isConfigSupported(config);
    if (support.supported) {
      supportedConfigs.push(config);
    } else {
      let name = `${config.codec}`;
      if (config.avc) {
        name += ` (${config.avc.format})`;
      }
      testcases.push(errorTestCase(
        `${name} ${config.latencyMode} encode`, "Config not supported"));
    }
  }

  // Set up camera if requested and available.
  let cameraVideo = null;
  if (sources.includes("camera")) {
    // Camera mode: create VideoFrames directly from the live video element
    // during each test instead of pre-generating and storing frames.
    // Pre-storing VideoFrame objects would risk exhausting the browser's
    // VideoFrame resource pool, which is backed by GPU/video memory with
    // platform-dependent limits.
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cameras = devices.filter(d => d.kind == "videoinput");
    if (!cameras.length) {
      testcases.push(errorTestCase(
        "camera", "No video input device found"));
    } else {
      try {
        cameraVideo = await startCamera(width, height);
      } catch (e) {
        testcases.push(errorTestCase(
          "camera", `Setup failed: ${e.message}`));
      }
    }
  }

  // Pre-generate canvas frames if needed.
  let frameDataMap = null;
  if (sources.includes("canvas")) {
    frameDataMap = await generateFrames(
      width, height, frameCount, frameDuration, pixelFormats
    );
  }

  for (const config of supportedConfigs) {
    let baseName = `${config.codec}`;
    if (config.avc) {
      baseName += ` (${config.avc.format})`;
    }

    for (const source of sources) {
      if (source == "camera") {
        if (!cameraVideo) {
          continue;
        }
        // Pixel format selection is skipped for camera since it provides
        // frames in its native format.
        let name = `${baseName} camera`;

        if (config.latencyMode == "realtime") {
          testcases.push({
            name: `${name} realtime encode`,
            func: async function() {
              return await realtimeEncodeTestFromCamera(
                config, cameraVideo, frameDuration, frameCount
              );
            }
          });
        }

        if (config.latencyMode == "quality") {
          testcases.push({
            name: `${name} quality encode`,
            func: async function() {
              return await qualityEncodeTestFromCamera(
                config, cameraVideo, frameCount, frameDuration
              );
            }
          });
        }
      } else {
        for (const pixelFormat of pixelFormats) {
          const frames = frameDataMap[pixelFormat];
          let name = `${baseName} ${pixelFormat} canvas`;

          if (config.latencyMode == "realtime") {
            testcases.push({
              name: `${name} realtime encode`,
              func: async function() {
                return await realtimeEncodeTest(config, frames, frameDuration);
              }
            });
          }

          if (config.latencyMode == "quality") {
            testcases.push({
              name: `${name} quality encode`,
              func: async function() {
                return await qualityEncodeTest(config, frames);
              }
            });
          }
        }
      }
    }
  }
  return testcases;
});

function parseParamsFromURL() {
  const params = new URLSearchParams(window.location.search);

  const framerate = params.has("framerate")
    ? Math.max(parseInt(params.get("framerate")), 0) || DEFAULT_PARAMS.framerate
    : DEFAULT_PARAMS.framerate;

  const bitrate = params.has("bitrate")
    ? Math.max(parseInt(params.get("bitrate")), 0) || DEFAULT_PARAMS.bitrate
    : DEFAULT_PARAMS.bitrate;

  let width = DEFAULT_PARAMS.width;
  let height = DEFAULT_PARAMS.height;
  const w = parseInt(params.get("width"));
  const h = parseInt(params.get("height"));
  if (w > 0 && h > 0) {
    width = w;
    height = h;
  }

  const latencyModes = params
    .get("latencyModes")
    ?.split(",")
    .filter(mode => mode == "realtime" || mode == "quality") || DEFAULT_PARAMS.latencyModes;

  const pixelFormats = params
    .get("pixelFormats")
    ?.split(",")
    .filter(f => f == "RGBX" || f == "I420") || DEFAULT_PARAMS.pixelFormats;

  const configList = params.has("codecs")
    ? params.get("codecs").split(",").flatMap(codecString => {
        const [codec, format] = codecString.split(":");
        const config = format ? { codec, avc: { format } } : { codec };
        return latencyModes.map(latencyMode => ({ ...config, latencyMode }));
      })
    : DEFAULT_PARAMS.codecList.flatMap(config =>
        latencyModes.map(latencyMode => ({ ...config, latencyMode }))
      );

  const sources = params
    .get("sources")
    ?.split(",")
    .filter(s => s == "canvas" || s == "camera") || DEFAULT_PARAMS.sources;

  return { configList, width, height, framerate, bitrate, pixelFormats, sources };
}

// --- Frame pre-generation ---

async function generateFrames(width, height, count, frameDuration, formats) {
  const canvas = createCanvas(width, height);
  const frameDataMap = {};

  for (const fmt of formats) {
    frameDataMap[fmt] = [];
  }

  const needsI420 = formats.includes("I420");
  let i420PreviewCanvas = null;
  let i420PreviewContainer = null;
  if (needsI420) {
    i420PreviewContainer = document.createElement("div");
    const label = document.createElement("div");
    label.textContent = "I420 preview";
    i420PreviewContainer.appendChild(label);
    i420PreviewCanvas = document.createElement("canvas");
    i420PreviewCanvas.width = width;
    i420PreviewCanvas.height = height;
    i420PreviewCanvas.style.width = `${width / 4}px`;
    i420PreviewCanvas.style.height = `${height / 4}px`;
    i420PreviewContainer.appendChild(i420PreviewCanvas);
    document.body.appendChild(i420PreviewContainer);
  }

  const progressBar = document.getElementById("progress-bar");
  const progressLabel = document.getElementById("progress-label");
  progressLabel.textContent = "Generating frames...";
  progressBar.max = count;
  progressBar.value = 0;

  for (let i = 0; i < count; i++) {
    drawClock(canvas);
    const timestamp = i * frameDuration;
    const canvasFrame = new VideoFrame(canvas, { timestamp });

    // Extract RGBX from canvas-sourced frame
    const rgbxSize = canvasFrame.allocationSize({ format: "RGBX" });
    const rgbxBuffer = new ArrayBuffer(rgbxSize);
    await canvasFrame.copyTo(rgbxBuffer, { format: "RGBX" });
    canvasFrame.close();

    if (formats.includes("RGBX")) {
      frameDataMap["RGBX"].push({
        buffer: rgbxBuffer, format: "RGBX", width, height, timestamp,
      });
    }

    if (needsI420) {
      const i420Buffer = convertRGBXtoI420(new Uint8Array(rgbxBuffer), width, height);
      frameDataMap["I420"].push({
        buffer: i420Buffer.buffer, format: "I420", width, height, timestamp,
      });
      drawI420ToCanvas(i420PreviewCanvas, i420Buffer, width, height);
    }

    progressBar.value = i + 1;

    // Yield to the browser to allow canvas repaint and progress bar update
    await new Promise(resolve => requestAnimationFrame(resolve));
  }

  progressLabel.textContent = "";
  removeCanvas(canvas);
  if (i420PreviewContainer) {
    document.body.removeChild(i420PreviewContainer);
  }
  return frameDataMap;
}

// RGBX to I420 conversion using BT.601 limited-range coefficients.
//
// I420 (aka YUV420p) stores image data as three separate planes:
//   Y plane: full resolution (width x height), one luma sample per pixel
//   U plane: half resolution (width/2 x height/2), chroma blue-difference
//   V plane: half resolution (width/2 x height/2), chroma red-difference
//
// The RGB-to-YUV conversion matrix (BT.601 limited range, Y in [16,235],
// UV in [16,240]) is:
//
//   Y =  0.257*R + 0.504*G + 0.098*B + 16
//   U = -0.148*R - 0.291*G + 0.439*B + 128
//   V =  0.439*R - 0.368*G - 0.071*B + 128
//
// To avoid floating-point arithmetic, we scale by 256 and use integer math:
//
//   Y = (( 66*R + 129*G +  25*B + 128) >> 8) + 16
//   U = ((-38*R -  74*G + 112*B + 128) >> 8) + 128
//   V = ((112*R -  94*G -  18*B + 128) >> 8) + 128
//
// The U and V planes are subsampled 2x2: each chroma sample covers a block
// of 4 pixels. Here we use the top-left pixel of each block for simplicity.
function convertRGBXtoI420(rgbx, width, height) {
  const ySize = width * height;
  const uvWidth = width >> 1;
  const uvHeight = height >> 1;
  const uvSize = uvWidth * uvHeight;
  const i420 = new Uint8Array(ySize + 2 * uvSize);

  const yPlane = i420;
  const uPlane = new Uint8Array(i420.buffer, ySize, uvSize);
  const vPlane = new Uint8Array(i420.buffer, ySize + uvSize, uvSize);

  // Y plane: one luma sample per pixel
  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      const px = (j * width + i) * 4;
      const r = rgbx[px], g = rgbx[px + 1], b = rgbx[px + 2];
      yPlane[j * width + i] = ((66 * r + 129 * g + 25 * b + 128) >> 8) + 16;
    }
  }

  // U and V planes: subsampled 2x2 (one sample per 4 pixels)
  for (let j = 0; j < uvHeight; j++) {
    for (let i = 0; i < uvWidth; i++) {
      const px = (j * 2 * width + i * 2) * 4;
      const r = rgbx[px], g = rgbx[px + 1], b = rgbx[px + 2];
      uPlane[j * uvWidth + i] = ((-38 * r - 74 * g + 112 * b + 128) >> 8) + 128;
      vPlane[j * uvWidth + i] = ((112 * r - 94 * g - 18 * b + 128) >> 8) + 128;
    }
  }

  return i420;
}

function drawI420ToCanvas(canvas, i420, width, height) {
  const frame = new VideoFrame(i420.buffer, {
    format: "I420",
    codedWidth: width,
    codedHeight: height,
    timestamp: 0,
  });
  const ctx = canvas.getContext("2d");
  ctx.drawImage(frame, 0, 0);
  frame.close();
}

function createFrameFromData(frameData) {
  return new VideoFrame(frameData.buffer, {
    format: frameData.format,
    codedWidth: frameData.width,
    codedHeight: frameData.height,
    timestamp: frameData.timestamp,
  });
}

// --- Camera ---

async function startCamera(width, height) {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width, height },
    audio: false,
  });
  const video = document.createElement("video");
  video.autoplay = true;
  video.muted = true;
  video.srcObject = stream;
  await video.play();
  // Wait until a video frame is actually available for capture.
  // requestVideoFrameCallback fires when a frame is presented, which is the
  // reliable signal that new VideoFrame(video) will succeed.
  await new Promise(resolve => video.requestVideoFrameCallback(resolve));

  const container = document.createElement("div");
  const label = document.createElement("div");
  label.textContent = "Camera preview";
  container.appendChild(label);
  video.style.width = `${width}px`;
  video.style.height = `${height}px`;
  container.appendChild(video);
  container.style.display = "none";
  document.body.appendChild(container);

  return video;
}

async function feedFramesFromCameraRealtime(
  worker, video, frameDuration, frameCount, keyFrameIntervalInFrames
) {
  let frameIndex = 0;
  return new Promise((resolve) => {
    const intervalId = setInterval(() => {
      if (frameIndex >= frameCount) {
        clearInterval(intervalId);
        resolve();
        return;
      }
      const timestamp = frameIndex * frameDuration;
      const frame = new VideoFrame(video, { timestamp });
      worker.postMessage({
        command: "encode",
        frame,
        isKey: frameIndex % keyFrameIntervalInFrames == 0,
      });
      frame.close();
      frameIndex++;
    }, frameDuration);
  });
}

function feedFramesFromCameraBatch(
  worker, video, frameCount, frameDuration, keyFrameIntervalInFrames
) {
  for (let i = 0; i < frameCount; i++) {
    const timestamp = i * frameDuration;
    const frame = new VideoFrame(video, { timestamp });
    worker.postMessage({
      command: "encode",
      frame,
      isKey: i % keyFrameIntervalInFrames == 0,
    });
    frame.close();
  }
}

// --- Frame feeding ---

async function feedFramesRealtime(
  worker,
  frames,
  frameDuration,
  keyFrameIntervalInFrames
) {
  let frameIndex = 0;
  return new Promise((resolve) => {
    const intervalId = setInterval(() => {
      if (frameIndex >= frames.length) {
        clearInterval(intervalId);
        resolve();
        return;
      }
      const frame = createFrameFromData(frames[frameIndex]);
      worker.postMessage({
        command: "encode",
        frame,
        isKey: frameIndex % keyFrameIntervalInFrames == 0,
      });
      frame.close();
      frameIndex++;
    }, frameDuration);
  });
}

function feedFramesBatch(worker, frames, keyFrameIntervalInFrames) {
  for (let i = 0; i < frames.length; i++) {
    const frame = createFrameFromData(frames[i]);
    worker.postMessage({
      command: "encode",
      frame,
      isKey: i % keyFrameIntervalInFrames == 0,
    });
    frame.close();
  }
}

// --- Test functions ---

function computeRealtimeStats(encodeTimes, outputTimes) {
  let results = { key: {}, delta: {} };
  results.key.encodeTimes = encodeTimes.filter(x => x.type == "key");
  results.delta.encodeTimes = encodeTimes.filter(x => x.type != "key");
  results.key.outputTimes = outputTimes.filter(x => x.type == "key");
  results.delta.outputTimes = outputTimes.filter(x => x.type != "key");

  results.key.frameDroppingRate =
    (results.key.encodeTimes.length - results.key.outputTimes.length) /
    results.key.encodeTimes.length * 100;
  results.delta.frameDroppingRate =
    (results.delta.encodeTimes.length - results.delta.outputTimes.length) /
    results.delta.encodeTimes.length * 100;

  results.key.roundTripTimes = calculateRoundTripTimes(
    results.key.encodeTimes,
    results.key.outputTimes
  );
  results.key.roundTripResult = getMeanAndStandardDeviation(
    results.key.roundTripTimes.map(x => x.time)
  );

  results.delta.roundTripTimes = calculateRoundTripTimes(
    results.delta.encodeTimes,
    results.delta.outputTimes
  );
  results.delta.roundTripResult = getMeanAndStandardDeviation(
    results.delta.roundTripTimes.map(x => x.time)
  );

  return {
    "frame-to-frame mean (key)": {
      value: results.key.roundTripResult.mean,
      unit: "ms",
    },
    "frame-to-frame cv (key)": {
      value: results.key.roundTripResult.cv * 100,
      unit: "%",
    },
    "frame-dropping rate (key)": {
      value: results.key.frameDroppingRate,
      unit: "%",
    },
    "frame-to-frame mean (non key)": {
      value: results.delta.roundTripResult.mean,
      unit: "ms",
    },
    "frame-to-frame cv (non key)": {
      value: results.delta.roundTripResult.cv * 100,
      unit: "%",
    },
    "frame-dropping rate (non key)": {
      value: results.delta.frameDroppingRate,
      unit: "%",
    },
  };
}

async function realtimeEncodeTest(config, frames, frameDuration) {
  const worker = new Worker("encoder-worker.js");
  config.latencyMode = "realtime";
  configureEncoder(worker, config);
  await feedFramesRealtime(worker, frames, frameDuration, KEY_FRAME_INTERVAL);
  let { encodeTimes, outputTimes } = await getEncoderResults(worker);
  worker.terminate();
  return computeRealtimeStats(encodeTimes, outputTimes);
}

async function realtimeEncodeTestFromCamera(config, video, frameDuration, frameCount) {
  video.parentNode.style.display = "";
  const worker = new Worker("encoder-worker.js");
  config.latencyMode = "realtime";
  configureEncoder(worker, config);
  await feedFramesFromCameraRealtime(
    worker, video, frameDuration, frameCount, KEY_FRAME_INTERVAL
  );
  let { encodeTimes, outputTimes } = await getEncoderResults(worker);
  worker.terminate();
  video.parentNode.style.display = "none";
  return computeRealtimeStats(encodeTimes, outputTimes);
}

async function qualityEncodeTest(config, frames) {
  const worker = new Worker("encoder-worker.js");
  config.latencyMode = "quality";
  configureEncoder(worker, config);

  feedFramesBatch(worker, frames, KEY_FRAME_INTERVAL);
  let { encodeTimes, outputTimes } = await getEncoderResults(worker);

  let duration = getTotalDuration(encodeTimes, outputTimes);

  worker.terminate();

  return {
    "first encode to last output": {
      value: duration,
      unit: "ms",
    },
  };
}

async function qualityEncodeTestFromCamera(config, video, frameCount, frameDuration) {
  video.parentNode.style.display = "";
  const worker = new Worker("encoder-worker.js");
  config.latencyMode = "quality";
  configureEncoder(worker, config);
  feedFramesFromCameraBatch(worker, video, frameCount, frameDuration, KEY_FRAME_INTERVAL);
  let { encodeTimes, outputTimes } = await getEncoderResults(worker);
  let duration = getTotalDuration(encodeTimes, outputTimes);
  worker.terminate();
  video.parentNode.style.display = "none";
  return {
    "first encode to last output": {
      value: duration,
      unit: "ms",
    },
  };
}

// --- Canvas / drawing ---

function createCanvas(width, height) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  document.body.appendChild(canvas);
  return canvas;
}

function removeCanvas(canvas) {
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.body.removeChild(canvas);
}

function drawClock(canvas) {
  const ctx = canvas.getContext("2d");
  ctx.save();

  ctx.fillStyle = "#dfdacd";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let radius = canvas.height / 2;
  ctx.translate(radius, radius);
  radius = radius * 0.7;

  drawFace(ctx, radius);
  markHours(ctx, radius);
  markMinutes(ctx, radius);
  drawTime(ctx, radius);

  ctx.restore();
}

function drawFace(ctx, radius) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "#feefde";
  ctx.fill();
  ctx.strokeStyle = "#6e6d6e";
  ctx.lineWidth = radius * 0.1;
  ctx.stroke();
  ctx.restore();
}

function markHours(ctx, radius) {
  ctx.save();
  ctx.strokeStyle = "#947360";
  ctx.lineWidth = radius * 0.05;
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(radius * 0.7, 0);
    ctx.lineTo(radius * 0.9, 0);
    ctx.stroke();
  }
  ctx.restore();
}

function markMinutes(ctx, radius) {
  ctx.save();
  ctx.strokeStyle = "#947360";
  ctx.lineWidth = radius * 0.01;
  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(radius * 0.8, 0);
      ctx.lineTo(radius * 0.85, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();
}

function drawTime(ctx, radius) {
  ctx.save();
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds() + now.getMilliseconds() / 1000;

  hour = hour % 12;
  hour =
    (hour * Math.PI) / 6 +
    (minute * Math.PI) / (6 * 60) +
    (second * Math.PI) / (360 * 60);
  drawHand(ctx, hour, radius * 0.5, radius * 0.07, "#a1afa0");

  minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
  drawHand(ctx, minute, radius * 0.8, radius * 0.07, "#a1afa0");

  second = (second * Math.PI) / 30;
  drawHand(ctx, second, radius * 0.9, radius * 0.02, "#970c10");
  ctx.restore();
}

function drawHand(ctx, pos, length, width, color = "black") {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
  ctx.restore();
}

// --- Worker communication ---

function configureEncoder(worker, config) {
  worker.postMessage({
    command: "configure",
    config,
  });
}

async function getEncoderResults(worker) {
  worker.postMessage({ command: "flush" });
  return new Promise((resolve, _) => {
    worker.onmessage = event => {
      if (event.data.command == "result") {
        const { encodeTimes, outputTimes } = event.data;
        resolve({ encodeTimes, outputTimes });
      }
    };
  });
}

// --- Statistics ---

function getTotalDuration(encodeTimes, outputTimes) {
  if (!outputTimes.length || encodeTimes.length < outputTimes.length) {
    return Infinity;
  }
  return outputTimes[outputTimes.length - 1].time - encodeTimes[0].time;
}

function calculateRoundTripTimes(encodeTimes, outputTimes) {
  let roundTripTimes = [];
  let encodeIndex = 0;
  let outputIndex = 0;
  while (
    encodeIndex < encodeTimes.length &&
    outputIndex < outputTimes.length
  ) {
    const encodeEntry = encodeTimes[encodeIndex];
    const outputEntry = outputTimes[outputIndex];

    if (encodeEntry.timestamp === outputEntry.timestamp) {
      const roundTripTime = outputEntry.time - encodeEntry.time;
      roundTripTimes.push({
        timestamp: outputEntry.timestamp,
        time: roundTripTime,
      });
      encodeIndex++;
      outputIndex++;
    } else if (encodeEntry.timestamp < outputEntry.timestamp) {
      encodeIndex++;
    } else {
      outputIndex++;
    }
  }
  return roundTripTimes;
}

function getMeanAndStandardDeviation(values) {
  if (!values.length) {
    return { mean: 0, stddev: 0, cv: 0 };
  }
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const stddev = Math.sqrt(
    values.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) /
      values.length
  );
  const cv = stddev / mean;
  return { mean, stddev, cv };
}
