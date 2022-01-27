import React from "react";
import { VoiceRecording } from "../../../audio/VoiceRecording";
interface IProps {
    recorder: VoiceRecording;
}
interface IState {
    seconds: number;
}
/**
 * A clock for a live recording.
 */
export default class LiveRecordingClock extends React.PureComponent<IProps, IState> {
    private seconds;
    private scheduledUpdate;
    constructor(props: any);
    componentDidMount(): void;
    private updateClock;
    render(): JSX.Element;
}
export {};
