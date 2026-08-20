window.mediaPlaybackDrivers = window.mediaPlaybackDrivers || {};

// One looping video filling the stage.
window.mediaPlaybackDrivers.single = {
  needsClip: true,

  async setup(stage, clip) {
    const video = document.createElement("video");
    video.src = clip.file;
    video.loop = true;
    // Muted is what makes playback permitted under Chrome's autoplay policy.
    // Firefox needs more: Raptor's profile blocks all autoplay, and muted is not
    // an exemption there, so the test manifest has to allow it explicitly.
    video.muted = true;
    video.preload = "auto";
    stage.appendChild(video);

    await new Promise((resolve, reject) => {
      video.addEventListener("playing", resolve, { once: true });
      video.addEventListener(
        "error",
        () => {
          const code = video.error ? video.error.code : "unknown";
          reject(new Error(`failed to load ${clip.file}: media error ${code}`));
        },
        { once: true }
      );
      video.play().catch(reject);
    });

    return video;
  },
};
