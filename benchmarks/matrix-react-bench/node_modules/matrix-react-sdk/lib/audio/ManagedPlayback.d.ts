import { Playback } from "./Playback";
import { PlaybackManager } from "./PlaybackManager";
/**
 * A managed playback is a Playback instance that is guided by a PlaybackManager.
 */
export declare class ManagedPlayback extends Playback {
    private manager;
    constructor(manager: PlaybackManager, buf: ArrayBuffer, seedWaveform?: number[]);
    play(): Promise<void>;
    destroy(): void;
}
