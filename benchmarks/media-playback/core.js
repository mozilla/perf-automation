/**
 * Drives the media playback benchmark. README.md documents the contract with
 * the harness, the state sequence, and the shape of the reported result.
 */

// Progress for the harness to poll. See "States" in README.md for what each one
// means and how they move.
const STATE = {
  LOADING: "loading",
  WARMUP: "warmup",
  READY: "ready",
  MEASURING: "measuring",
  DONE: "done",
  ERROR: "error",
};

// Opening the page by hand runs the whole thing and prints the result; the
// harness passes this marker to take control of the measured window instead.
const HARNESS = new URLSearchParams(location.search).has("raptor");

window.mediaPlaybackResult = null;
// Incremented each time a result is published, so the caller can tell a new
// measurement from the one it already read.
window.mediaPlaybackMeasurementCount = 0;
window.mediaPlaybackError = null;

let settled = false;

function render(text) {
  const status = document.getElementById("status");
  if (status) {
    status.textContent = text;
  }
}

function setState(state) {
  window.mediaPlaybackState = state;
  // The state itself is always published; what is skipped is drawing it. These
  // two transitions are the ones that happen inside a measured window, and
  // writing to the status node costs layout and paint that would be charged to
  // the energy being measured. Every other transition is outside a window, where
  // showing it is free and useful.
  if (HARNESS && (state === STATE.MEASURING || state === STATE.DONE)) {
    return;
  }
  render(state);
}

// Every failure ends up here, so that no path can leave the page stuck in a
// non-terminal state with nothing reported: the harness polls for done or error
// and would otherwise wait out its own timeout with no diagnosis.
function fail(reason) {
  if (settled) {
    return;
  }
  settled = true;
  const message = String(reason && reason.message ? reason.message : reason);
  window.mediaPlaybackError = message;
  window.mediaPlaybackState = STATE.ERROR;
  render(STATE.ERROR + ": " + message);
  console.error("media-playback: " + message);
}

setState(STATE.LOADING);

window.addEventListener("error", event =>
  fail(event.message || "uncaught error")
);
window.addEventListener("unhandledrejection", event =>
  fail(event.reason || "unhandled rejection")
);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function withTimeout(promise, ms, message) {
  let timer;
  return Promise.race([
    Promise.resolve(promise).finally(() => clearTimeout(timer)),
    new Promise((resolve, reject) => {
      timer = setTimeout(() => reject(new Error(message)), ms);
    }),
  ]);
}

function readConfig() {
  const DEFAULTS = {
    clip: "h264_1080p30",
    driver: "single",
    warmupMs: 5000,
    measureMs: 20000,
  };
  const MAX_DURATION_MS = 600000;

  const params = new URLSearchParams(location.search);
  const config = Object.assign({}, DEFAULTS);
  for (const key of ["clip", "driver"]) {
    if (params.has(key)) {
      config[key] = params.get(key);
    }
  }
  for (const key of ["warmupMs", "measureMs"]) {
    if (!params.has(key)) {
      continue;
    }
    const raw = params.get(key);
    // Number() rather than parseInt(): parseInt stops at the first non-digit, so
    // "1e5" becomes 1 and "20s" becomes 20, so a typo would pass validation and
    // produce a window far too short to measure, reported as a good run.
    const value = Number(raw);
    if (!Number.isInteger(value) || value < 0 || value > MAX_DURATION_MS) {
      throw new Error(`invalid ${key}: ${raw}`);
    }
    config[key] = value;
  }
  if (config.measureMs <= 0) {
    throw new Error(`measureMs must be greater than zero: ${config.measureMs}`);
  }
  return config;
}

/**
 * Reports whether playback kept up over the measured window, which is what makes
 * the energy figure interpretable: decoding fewer frames costs less energy, so a
 * run that stopped keeping up looks like an improvement unless something says
 * otherwise.
 */
class FrameCollector {
  constructor(video, expectedFps) {
    this.video = video;
    this.expectedFps = expectedFps;
    this.reset();
  }

  reset() {
    this.startQuality = this.#quality();
  }

  // Throws if the frame statistics are unavailable or playback fell behind.
  // Both are called from the measured window's completion handler, whose
  // .catch() routes them through fail(), so the page ends in `error` with a
  // reason the harness can read, rather than reporting a cheap result or
  // stalling in `measuring`.
  summarize(elapsedMs) {
    // Far enough below the declared rate to catch playback breaking down rather
    // than ordinary jitter.
    const MIN_FPS_RATIO = 0.5;

    const end = this.#quality();
    const total = end.totalVideoFrames - this.startQuality.totalVideoFrames;
    const dropped =
      end.droppedVideoFrames - this.startQuality.droppedVideoFrames;
    // totalVideoFrames counts every frame that passed the playback clock,
    // including ones the decoder skipped without decoding and ones the sink
    // dropped, so on its own it sits at the clip's nominal rate even when almost
    // nothing was decoded. Subtracting the dropped count is what makes this
    // measure playback keeping up rather than the clock advancing.
    const presented = total - dropped;
    const presentedFps = (presented / elapsedMs) * 1000;
    // Worked example: a 1080p30 clip whose decoder falls back to skipping frames
    // might present 12 fps while the machine draws noticeably less energy than
    // before. Reported as a number, that is indistinguishable from playback
    // becoming cheaper, and reads as an improvement. Failing instead means the
    // energy figure is only ever published for a run that kept up.
    if (presentedFps < this.expectedFps * MIN_FPS_RATIO) {
      throw new Error(
        `playback did not keep up: ${presentedFps.toFixed(2)} of ` +
          `${this.expectedFps} fps presented, ${dropped} dropped`
      );
    }
    return {
      presentedFps,
      expectedFps: this.expectedFps,
      droppedFrames: dropped,
      videoWidth: this.video.videoWidth,
      videoHeight: this.video.videoHeight,
      currentSrc: this.video.currentSrc,
    };
  }

  #quality() {
    if (!this.video.getVideoPlaybackQuality) {
      throw new Error("getVideoPlaybackQuality is unavailable");
    }
    return this.video.getVideoPlaybackQuality();
  }
}

async function resolveClip(name) {
  const response = await fetch("clips.json");
  // fetch() rejects only on a network failure, so without this an HTTP error is
  // diagnosed as a JSON syntax error against the server's error page.
  if (!response.ok) {
    throw new Error(`clips.json: HTTP ${response.status}`);
  }
  const manifest = await response.json();
  if (!Object.hasOwn(manifest, name)) {
    throw new Error(`unknown clip: ${name}`);
  }
  const clip = manifest[name];
  for (const field of ["file", "codec", "width", "height", "fps"]) {
    if (clip[field] === undefined) {
      throw new Error(`clip ${name} is missing ${field}`);
    }
  }
  return clip;
}

function beginMeasure(config, clip, collector, onWindowClosed) {
  // A window that ran this much longer than asked did not measure the interval
  // the harness charged its energy to.
  const MAX_OVERRUN_RATIO = 1.5;

  const state = window.mediaPlaybackState;
  // Openable from `ready` for the first window and from `done` for every later
  // one, but never from `measuring`: that would rebase the frame counters
  // mid-window and publish a rate the caller never bracketed.
  if (state !== STATE.READY && state !== STATE.DONE) {
    console.error(
      "media-playback: mediaPlaybackBeginMeasure ignored in state " + state
    );
    return;
  }
  setState(STATE.MEASURING);

  if (collector) {
    collector.reset();
  }
  const start = performance.now();

  sleep(config.measureMs)
    .then(() => {
      const elapsed = performance.now() - start;
      if (elapsed > config.measureMs * MAX_OVERRUN_RATIO) {
        throw new Error(
          `measured window overran: ${Math.round(elapsed)}ms of ${config.measureMs}ms`
        );
      }
      const result = {
        driver: config.driver,
        clip: clip ? config.clip : null,
        codec: clip ? clip.codec : null,
        presentedFps: null,
        expectedFps: null,
        droppedFrames: null,
        videoWidth: null,
        videoHeight: null,
        currentSrc: null,
        fullscreen: document.fullscreenElement !== null,
        ...(collector ? collector.summarize(elapsed) : {}),
        requestedMeasureMs: config.measureMs,
        elapsedMs: elapsed,
      };
      window.mediaPlaybackResult = result;
      window.mediaPlaybackMeasurementCount += 1;
      setState(STATE.DONE);
      if (!HARNESS) {
        render(STATE.DONE + "\n" + JSON.stringify(result, null, 2));
      }
      if (onWindowClosed) {
        onWindowClosed();
      }
    })
    .catch(fail);
}

async function run() {
  const LOAD_TIMEOUT_MS = 30000;
  const BEGIN_TIMEOUT_MS = 120000;

  const config = readConfig();
  const stage = document.getElementById("stage");

  // Drivers register themselves from plain scripts loaded by index.html rather
  // than being imported here: a dynamic import built from a query-string value is
  // both a lint violation and an ES module, which would make these files depend
  // on the local webserver serving the right MIME type.
  const drivers = window.mediaPlaybackDrivers || {};
  if (!Object.hasOwn(drivers, config.driver)) {
    throw new Error(`unknown driver: ${config.driver}`);
  }
  const driver = drivers[config.driver];

  const clip = driver.needsClip ? await resolveClip(config.clip) : null;
  const video = await withTimeout(
    driver.setup(stage, clip),
    LOAD_TIMEOUT_MS,
    `playback did not start within ${LOAD_TIMEOUT_MS}ms`
  );
  const collector = video ? new FrameCollector(video, clip.fps) : null;

  // Fullscreen so the frame is not scaled by an amount that depends on how tall
  // the browser's chrome is, which would otherwise land in the energy being
  // compared. Requesting it requires user activation, so it is done from a click
  // handler and the caller clicks #gesture. A WebDriver click is trusted, so
  // this needs nothing configured and behaves the same in every browser. A
  // refused or absent click leaves the run windowed, which is still a valid
  // measurement; the result says which it was.
  // The idle driver has no video, so the stage stands in for it: that way idle
  // and playback are measured in the same visual state, with no browser chrome
  // being painted in one and not the other.
  document.getElementById("gesture").addEventListener(
    "click",
    () => {
      (video || stage).requestFullscreen().catch(error => {
        console.error("media-playback: fullscreen refused: " + error);
      });
    },
    { once: true }
  );

  setState(STATE.WARMUP);
  await sleep(config.warmupMs);

  // Playback is deliberately left running from here on, across every window the
  // caller opens. Pausing between them would let the decoder go dormant and fold
  // its spin-up cost into the next window, which is what the warmup exists to
  // remove. Reloading the page between replicates would do the same thing while
  // also costing a page load each time.
  let firstWindowTimer = null;
  window.mediaPlaybackBeginMeasure = () => {
    if (firstWindowTimer !== null) {
      clearTimeout(firstWindowTimer);
      firstWindowTimer = null;
    }
    beginMeasure(config, clip, collector, null);
  };

  setState(STATE.READY);

  if (!HARNESS) {
    // Opened by hand: measure once and print it, rather than waiting forever for
    // a caller that is not there.
    await new Promise(resolve => {
      beginMeasure(config, clip, collector, resolve);
    });
    return;
  }

  // The caller opens as many windows as it wants replicates. Nothing more to do
  // here, beyond noticing if it never asks for one.
  firstWindowTimer = setTimeout(() => {
    if (!window.mediaPlaybackMeasurementCount) {
      fail(`no measured window was opened within ${BEGIN_TIMEOUT_MS}ms`);
    }
  }, BEGIN_TIMEOUT_MS);
}

run().catch(fail);
