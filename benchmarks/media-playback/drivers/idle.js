window.mediaPlaybackDrivers = window.mediaPlaybackDrivers || {};

// The same page over the same window with no video at all, for reading the
// playback numbers against and for spotting baseline drift.
window.mediaPlaybackDrivers.idle = {
  needsClip: false,

  async setup() {
    return null;
  },
};
