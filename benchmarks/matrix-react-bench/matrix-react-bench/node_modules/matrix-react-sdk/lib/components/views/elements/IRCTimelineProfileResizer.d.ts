import React from 'react';
interface IProps {
    roomId: string;
    minWidth: number;
    maxWidth: number;
}
interface IState {
    width: number;
    IRCLayoutRoot: HTMLElement;
}
export default class IRCTimelineProfileResizer extends React.Component<IProps, IState> {
    constructor(props: IProps);
    componentDidMount(): void;
    private dragFunc;
    private updateCSSWidth;
    private onMoueUp;
    render(): JSX.Element;
}
export {};
