import React from "react";
import { VoiceRecording } from "../../../audio/VoiceRecording";
interface IProps {
    recorder: VoiceRecording;
}
interface IState {
    waveform: number[];
}
/**
 * A waveform which shows the waveform of a live recording
 */
export default class LiveRecordingWaveform extends React.PureComponent<IProps, IState> {
    static defaultProps: {
        progress: number;
    };
    private waveform;
    private scheduledUpdate;
    constructor(props: any);
    componentDidMount(): void;
    private updateWaveform;
    render(): JSX.Element;
}
export {};
