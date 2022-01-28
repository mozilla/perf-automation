import React from "react";
interface IProps {
    relHeights: number[];
    progress: number;
}
interface IState {
}
/**
 * A simple waveform component. This renders bars (centered vertically) for each
 * height provided in the component properties. Updating the properties will update
 * the rendered waveform.
 *
 * For CSS purposes, a mx_Waveform_bar_100pct class is added when the bar should be
 * "filled", as a demonstration of the progress property.
 */
export default class Waveform extends React.PureComponent<IProps, IState> {
    static defaultProps: {
        progress: number;
    };
    render(): JSX.Element;
}
export {};
