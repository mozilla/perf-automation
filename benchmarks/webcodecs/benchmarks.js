const DEFAULT_PARAMS = {
  width: 640,
  height: 480,
  bitrate: 1000000, // 1 Mbps
  framerate: 30,
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

addTestsLoader(async function() {
  const { configList, width, height, framerate, bitrate } = parseParamsFromURL();
  let testcases = [];
  for (const c of configList) {
    let config = {
      ...c, // latencyMode and avc should have been set
      width,
      height,
      bitrate,
      framerate,
    };
    const support = await VideoEncoder.isConfigSupported(config);
    if (support.supported) {
      let name = `${config.codec}`;
      if (config.avc) {
        name += ` (${config.avc.format})`;
      }

      if (config.latencyMode == "realtime") {
        testcases.push({
          name: `${name} realtime encode`,
          func: async function() {
            return await realtimeEncodeTest(config);
          }
        });
      }

      if (config.latencyMode == "quality") {
        testcases.push({
          name: `${name} quality encode`,
          func: async function() {
            return await qualityEncodeTest(config);
          }
        });
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
    .filter(mode => mode === "realtime" || mode === "quality") || DEFAULT_PARAMS.latencyModes;

  const configList = params.has("codecs")
    ? params.get("codecs").split(",").flatMap(codecString => {
        const [codec, format] = codecString.split(":");
        const config = format ? { codec, avc: { format } } : { codec };
        return latencyModes.map(latencyMode => ({ ...config, latencyMode }));
      })
    : DEFAULT_PARAMS.codecList.flatMap(config =>
        latencyModes.map(latencyMode => ({ ...config, latencyMode }))
      );

  return { configList, width, height, framerate, bitrate };
}

async function realtimeEncodeTest(config) {
  const fps = 30;
  const totalDuration = 3000; // ms
  const keyFrameInterval = 15; // 1 key every 15 frames

  const worker = new Worker("encoder-worker.js");
  config.latencyMode = "realtime";
  configureEncoder(worker, config);

  const canvas = createCanvas(config.width, config.height);
  await encodeCanvas(worker, canvas, fps, totalDuration, keyFrameInterval);
  let { encodeTimes, outputTimes } = await getEncoderResults(worker);

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

  removeCanvas(canvas);
  worker.terminate();

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

async function qualityEncodeTest(config) {
  const fps = 30;
  const totalDuration = 3000; // ms
  const keyFrameInterval = 15; // 1 key every 15 frames

  const worker = new Worker("encoder-worker.js");
  config.latencyMode = "quality";
  configureEncoder(worker, config);

  const canvas = createCanvas(config.width, config.height);
  await encodeCanvas(worker, canvas, fps, totalDuration, keyFrameInterval);
  let { encodeTimes, outputTimes } = await getEncoderResults(worker);

  let duration = getTotalDuration(encodeTimes, outputTimes);

  removeCanvas(canvas);
  worker.terminate();

  return {
    "first encode to last output": {
      value: duration,
      unit: "ms",
    },
  };
}

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

function configureEncoder(worker, config) {
  worker.postMessage({
    command: "configure",
    config,
  });
}

async function encodeCanvas(
  worker,
  canvas,
  fps,
  totalDuration,
  keyFrameIntervalInFrames
) {
  const frameDuration = Math.round(1000 / fps); // ms
  let encodeDuration = 0;
  let frameCount = 0;
  let intervalId;

  return new Promise((resolve, _) => {
    // first callback happens after frameDuration.
    intervalId = setInterval(() => {
      if (encodeDuration > totalDuration) {
        clearInterval(intervalId);
        resolve(encodeDuration);
        return;
      }
      drawClock(canvas);
      const frame = new VideoFrame(canvas, { timestamp: encodeDuration });
      worker.postMessage({
        command: "encode",
        frame,
        isKey: frameCount % keyFrameIntervalInFrames == 0,
      });
      frameCount += 1;
      encodeDuration += frameDuration;
    }, frameDuration);
  });
}

async function getEncoderResults(worker) {
  worker.postMessage({ command: "flush" });
  return new Promise((resolve, _) => {
    worker.onmessage = event => {
      if (event.data.command === "result") {
        const { encodeTimes, outputTimes } = event.data;
        resolve({ encodeTimes, outputTimes });
      }
    };
  });
}

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
