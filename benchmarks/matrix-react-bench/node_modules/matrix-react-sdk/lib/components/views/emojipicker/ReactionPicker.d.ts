import React from 'react';
import { MatrixEvent } from "matrix-js-sdk/src/models/event";
interface IProps {
    mxEvent: MatrixEvent;
    reactions: any;
    onFinished(): void;
}
interface IState {
    selectedEmojis: Set<string>;
}
declare class ReactionPicker extends React.Component<IProps, IState> {
    constructor(props: any);
    componentDidUpdate(prevProps: any): void;
    private addListeners;
    componentWillUnmount(): void;
    private getReactions;
    private onReactionsChange;
    onChoose: (reaction: string) => boolean;
    render(): JSX.Element;
}
export default ReactionPicker;
