import React, { ReactNode } from "react";
import AccessibleTooltipButton from "../elements/AccessibleTooltipButton";
import { Playback, PlaybackState } from "../../../audio/Playback";
interface IProps extends Omit<React.ComponentProps<typeof AccessibleTooltipButton>, "title" | "onClick" | "disabled"> {
    playback: Playback;
    playbackPhase: PlaybackState;
}
/**
 * Displays a play/pause button (activating the play/pause function of the recorder)
 * to be displayed in reference to a recording.
 */
export default class PlayPauseButton extends React.PureComponent<IProps> {
    constructor(props: any);
    private onClick;
    toggleState(): Promise<void>;
    render(): ReactNode;
}
export {};
