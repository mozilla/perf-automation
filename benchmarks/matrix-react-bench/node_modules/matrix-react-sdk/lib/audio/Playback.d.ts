/// <reference types="node" />
import EventEmitter from "events";
import { SimpleObservable } from "matrix-widget-api";
import { IDestroyable } from "../utils/IDestroyable";
import { PlaybackClock } from "./PlaybackClock";
export declare enum PlaybackState {
    Decoding = "decoding",
    Stopped = "stopped",
    Paused = "paused",
    Playing = "playing"
}
export declare const PLAYBACK_WAVEFORM_SAMPLES = 39;
export declare const DEFAULT_WAVEFORM: number[];
export declare class Playback extends EventEmitter implements IDestroyable {
    private buf;
    /**
     * Stable waveform for representing a thumbnail of the media. Values are
     * guaranteed to be between zero and one, inclusive.
     */
    readonly thumbnailWaveform: number[];
    private readonly context;
    private source;
    private state;
    private audioBuf;
    private element;
    private resampledWaveform;
    private waveformObservable;
    private readonly clock;
    private readonly fileSize;
    /**
     * Creates a new playback instance from a buffer.
     * @param {ArrayBuffer} buf The buffer containing the sound sample.
     * @param {number[]} seedWaveform Optional seed waveform to present until the proper waveform
     * can be calculated. Contains values between zero and one, inclusive.
     */
    constructor(buf: ArrayBuffer, seedWaveform?: number[]);
    /**
     * Size of the audio clip in bytes. May be zero if unknown. This is updated
     * when the playback goes through phase changes.
     */
    get sizeBytes(): number;
    /**
     * Stable waveform for the playback. Values are guaranteed to be between
     * zero and one, inclusive.
     */
    get waveform(): number[];
    get waveformData(): SimpleObservable<number[]>;
    get clockInfo(): PlaybackClock;
    get currentState(): PlaybackState;
    get isPlaying(): boolean;
    emit(event: PlaybackState, ...args: any[]): boolean;
    destroy(): void;
    prepare(): Promise<void>;
    private onPlaybackEnd;
    play(): Promise<void>;
    private disconnectSource;
    private makeNewSourceBuffer;
    pause(): Promise<void>;
    stop(): Promise<void>;
    toggle(): Promise<void>;
    skipTo(timeSeconds: number): Promise<void>;
}
