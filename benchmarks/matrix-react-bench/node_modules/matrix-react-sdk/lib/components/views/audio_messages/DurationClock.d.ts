import React from "react";
import { Playback } from "../../../audio/Playback";
interface IProps {
    playback: Playback;
}
interface IState {
    durationSeconds: number;
}
/**
 * A clock which shows a clip's maximum duration.
 */
export default class DurationClock extends React.PureComponent<IProps, IState> {
    constructor(props: any);
    private onTimeUpdate;
    render(): JSX.Element;
}
export {};
