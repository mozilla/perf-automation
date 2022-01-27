export declare const WORKLET_NAME = "mx-voice-worklet";
export declare enum PayloadEvent {
    Timekeep = "timekeep",
    AmplitudeMark = "amplitude_mark"
}
export interface IPayload {
    ev: PayloadEvent;
}
export interface ITimingPayload extends IPayload {
    ev: PayloadEvent.Timekeep;
    timeSeconds: number;
}
export interface IAmplitudePayload extends IPayload {
    ev: PayloadEvent.AmplitudeMark;
    forIndex: number;
    amplitude: number;
}
