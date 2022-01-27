import React from "react";
import { Playback, PlaybackState } from "../../../audio/Playback";
interface IProps {
    playback: Playback;
    defaultDisplaySeconds?: number;
}
interface IState {
    seconds: number;
    durationSeconds: number;
    playbackPhase: PlaybackState;
}
/**
 * A clock for a playback of a recording.
 */
export default class PlaybackClock extends React.PureComponent<IProps, IState> {
    constructor(props: any);
    private onPlaybackUpdate;
    private onTimeUpdate;
    render(): JSX.Element;
}
export {};
