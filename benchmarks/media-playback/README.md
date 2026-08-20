# media-playback

A sustained video playback workload, for measuring what playing a video costs in
power. Intended for mozilla-central's `browsertime-media-playback` Raptor suite,
which clones this repository and serves this directory.

The suite serves the directory and navigates a browser to `index.html`, so
`core.js` runs in the page and takes its settings from the query string. It plays
a looping clip, either 1080p30 or 2160p30 according to the `clip` parameter,
discards a warmup so that start-up and decoder spin-up are not charged to the
measurement, and then reports how playback went over each window that the caller
opens and closes.

## Parameters

All optional, all query-string:

| Parameter   | Default        | Meaning                                                 |
| ----------- | -------------- | ------------------------------------------------------- |
| `clip`      | `h264_1080p30` | A key in `clips.json`. Ignored by the `idle` driver.    |
| `driver`    | `single`       | `single` plays one looping video; `idle` plays nothing. |
| `warmupMs`  | `5000`         | Discarded playback before the window can open.          |
| `measureMs` | `20000`        | Length of the measured window.                          |
| `raptor`    | absent         | Present means a harness drives the measured window.     |

## States

`mediaPlaybackState` moves in one direction:

```
loading --> warmup --> ready --> measuring --> done
   |          |          |           |          |
   +----------+----------+-----------+----------+--> error
```

| State       | Meaning                                                             |
| ----------- | ------------------------------------------------------------------- |
| `loading`   | Resolving the clip and waiting for playback to begin.               |
| `warmup`    | Playing, and everything it produces is being thrown away.           |
| `ready`     | Playing, warmed up, waiting for the caller to open its window.      |
| `measuring` | Playing, and frame counters are accumulating.                       |
| `done`      | A window has closed and its result is readable. Playback continues. |
| `error`     | Setup or measurement failed; the reason is in `mediaPlaybackError`. |

`error` is terminal. `done` is not: another window can be opened from it, which is
how repeated replicates work. The states describe what the caller should do next
rather than what the video is doing, because playback starts before `warmup` and
is never paused afterwards.

`warmup` exists because playback is at its most expensive and least
representative when it starts. The decoder is being created, the first frames are
decoded before any pipelining, and buffers are filling. Charging that to the
result would report start-up cost as the cost of playing a video, so it is played
and thrown away, and the measured windows that follow see a decoder in a steady
state. For the same reason playback is never paused afterwards: a paused decoder
goes dormant and its spin-up cost would land in the next window.

A window can be opened from `ready` or from `done`, but not while `measuring`.

## Harness contract

| Global                          | Meaning                                                                         |
| ------------------------------- | ------------------------------------------------------------------------------- |
| `mediaPlaybackState`            | See States above.                                                               |
| `mediaPlaybackBeginMeasure()`   | Opens a measured window. Valid in `ready` or `done`; ignored while `measuring`. |
| `mediaPlaybackResult`           | Readable once the state is `done`.                                              |
| `mediaPlaybackError`            | The reason, once the state is `error`.                                          |
| `mediaPlaybackMeasurementCount` | How many results have been published, so a new one can be told from the last.   |

The sequence is: poll for `ready`, then for each replicate start measuring power,
call `mediaPlaybackBeginMeasure()`, wait for `mediaPlaybackMeasurementCount` to
rise (or for `error`), stop measuring, and read the result.

Each replicate is one measured window, and how many there are is the caller's
choice rather than the page's. The Raptor suite sets `page_cycles` in its
manifest, currently fifteen, and opens that many windows in turn; several are
needed because one window on its own is noisy, and the suite reports their median.

Playback runs continuously across all of them. The page is loaded once and the
video is never paused or restarted, so every window sees a decoder already in a
steady state. Reloading between windows would put a page load, a freshly created
decoder and a fullscreen transition in front of each replicate, which is the
start-up cost the warmup exists to keep out of the result.

Wait for `mediaPlaybackMeasurementCount` to rise rather than for the `done` state,
which the previous window has already set.

`mediaPlaybackResult` always carries every key. The ones describing video are
`null` for the `idle` driver:

| Key                                       | Meaning                                                                                   |
| ----------------------------------------- | ----------------------------------------------------------------------------------------- |
| `driver`, `clip`, `codec`                 | What was asked for.                                                                       |
| `presentedFps`                            | Frames per second that reached the screen over the window.                                |
| `expectedFps`                             | The clip's declared rate, for `presentedFps` to be read against.                          |
| `droppedFrames`                           | Frames dropped over the window.                                                           |
| `videoWidth`, `videoHeight`, `currentSrc` | What actually loaded.                                                                     |
| `fullscreen`                              | Whether the video was fullscreen; a windowed run is not comparable with a fullscreen one. |
| `requestedMeasureMs`, `elapsedMs`         | The window asked for, and the window that happened.                                       |

`presentedFps` guards the energy figure: playing fewer frames costs less energy,
so a run that stopped keeping up would otherwise read as an improvement. The page
fails the run itself when the presented rate falls below half the declared rate.

Note the counter it uses. `totalVideoFrames` alone counts every frame that passed
the playback clock, including frames the decoder skipped without ever decoding,
so it stays at the nominal rate even when almost nothing was decoded. Subtracting
`droppedVideoFrames` is what makes the number mean playback keeping up.

The page goes fullscreen when the caller clicks `#gesture`. Laid out in the
content area, the frame is scaled by an amount that depends on how tall the
browser's chrome is, and that difference would land in the energy being compared;
fullscreen makes the area the screen in every browser. On a 1920x1080 screen a
1080p clip is then unscaled and a 4K clip is halved with the whole frame on
screen.

Fullscreen requires user activation, which is why it is a click rather than
something the page does by itself: a WebDriver click is trusted and supplies it,
so this needs no preference set and behaves the same in every browser. If the
click does not arrive the run stays windowed, which is still a valid measurement
-- `fullscreen` in the result says which it was. The `idle` driver has no video,
so the stage is fullscreened instead, keeping idle and playback in the same
visual state.

## Landing changes across two repositories

This page and the script that drives it live in different repositories, and
mozilla-central pins a revision of this one. So the two halves cannot land
together: land a backward-compatible change here first, then bump the pinned
revision there.

A mismatch would not be loud on its own. The driving script polls
`mediaPlaybackState` and then calls `mediaPlaybackBeginMeasure()`; a page that
spelled a state differently, or no longer offered that call, would leave the
script polling until the task timed out with nothing in the log naming the cause.
So before it starts, the script checks that the interface it is about to drive is
actually there, and fails by name if it is not. That check reads the interface
itself rather than a declared version number, so it cannot fall out of date.

The other benchmarks here need nothing of the sort, because they are not driven
this way. `video-playback-latency` is passive HTML that the Raptor script drives
entirely from the outside, and `webcodecs` reports results through Raptor's shared
`raptor-benchmark` `postMessage` protocol, which is one way and defined by Raptor
rather than by the benchmark. This page needs a two way exchange, because the
caller has to open its power measurement around an interval that begins after
playback is already running, and no shared protocol covers that.

## Clips

1080p30 and 2160p30, three codecs each, no audio, 5 s each, looped to fill the
window. Generated rather than sampled, so there is no licensing question and they
can be rebuilt.


All encodes target the same bitrate per pixel.

To regenerate, render a raw source clip and encode it three ways from it. One
shared intermediate is what makes the three comparable. Run these from `clips/`.

```sh
ffmpeg -hide_banner -loglevel error -y -f lavfi \
  -i "mandelbrot=size=1920x1080:rate=30:maxiter=800" \
  -t 5 -pix_fmt yuv420p /tmp/mp_source_1080p.y4m

ffmpeg -hide_banner -loglevel error -y -i /tmp/mp_source_1080p.y4m -an \
  -c:v libx264 -preset medium -b:v 2M -maxrate 2M -bufsize 4M \
  -g 60 -pix_fmt yuv420p h264_1080p30.mp4

ffmpeg -hide_banner -loglevel error -y -i /tmp/mp_source_1080p.y4m -an \
  -c:v libvpx-vp9 -deadline good -cpu-used 2 -row-mt 1 -b:v 2M \
  -g 60 -pix_fmt yuv420p vp9_1080p30.webm

ffmpeg -hide_banner -loglevel error -y -i /tmp/mp_source_1080p.y4m -an \
  -c:v libsvtav1 -preset 8 -b:v 2M \
  -g 60 -pix_fmt yuv420p av1_1080p30.mp4
```

For 4K, the same three encodes from a `size=3840x2160` source at `-b:v 8M`
(`-maxrate 8M -bufsize 16M` for x264), written to `2160p30` filenames.

`mandelbrot` rather than a test pattern: patterns compress to almost nothing, so
decoding them would understate the cost of real playback.

## License

MPL 2.0
