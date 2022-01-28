import React from "react";
import { Playback } from "../../../audio/Playback";
interface IProps {
    playback: Playback;
}
interface IState {
    heights: number[];
    progress: number;
}
/**
 * A waveform which shows the waveform of a previously recorded recording
 */
export default class PlaybackWaveform extends React.PureComponent<IProps, IState> {
    constructor(props: any);
    private toHeights;
    private onWaveformUpdate;
    private onTimeUpdate;
    render(): JSX.Element;
}
export {};
