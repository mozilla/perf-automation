import React from 'react';
import { CallFeed } from 'matrix-js-sdk/src/webrtc/callFeed';
interface IProps {
    feed: CallFeed;
}
interface IState {
    audioMuted: boolean;
}
export default class AudioFeed extends React.Component<IProps, IState> {
    private element;
    constructor(props: IProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private onAudioOutputChanged;
    private playMedia;
    private stopMedia;
    private onNewStream;
    render(): JSX.Element;
}
export {};
