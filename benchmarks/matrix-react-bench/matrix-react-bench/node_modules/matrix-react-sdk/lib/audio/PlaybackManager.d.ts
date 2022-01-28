import { Playback } from "./Playback";
import { ManagedPlayback } from "./ManagedPlayback";
/**
 * Handles management of playback instances to ensure certain functionality, like
 * one playback operating at any one time.
 */
export declare class PlaybackManager {
    private static internalInstance;
    private instances;
    static get instance(): PlaybackManager;
    /**
     * Pauses all other playback instances. If no playback is provided, all playing
     * instances are paused.
     * @param playback Optional. The playback to leave untouched.
     */
    pauseAllExcept(playback?: Playback): void;
    destroyPlaybackInstance(playback: ManagedPlayback): void;
    createPlaybackInstance(buf: ArrayBuffer, waveform?: number[]): Playback;
}
