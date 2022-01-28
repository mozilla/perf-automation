import React from 'react';
import { Room } from "matrix-js-sdk/src/models/room";
import { RoomMember } from "matrix-js-sdk/src/models/room-member";
import Timer from '../../../utils/Timer';
interface IProps {
    room: Room;
    onShown?: () => void;
    onHidden?: () => void;
    whoIsTypingLimit: number;
}
interface IState {
    usersTyping: RoomMember[];
    delayedStopTypingTimers: Record<string, Timer>;
}
export default class WhoIsTypingTile extends React.Component<IProps, IState> {
    static defaultProps: {
        whoIsTypingLimit: number;
    };
    state: {
        usersTyping: RoomMember[];
        delayedStopTypingTimers: {};
    };
    componentDidMount(): void;
    componentDidUpdate(_: any, prevState: any): void;
    componentWillUnmount(): void;
    private static isVisible;
    isVisible: () => boolean;
    private onRoomTimeline;
    private onRoomMemberTyping;
    private updateDelayedStopTypingTimers;
    private abortUserTimer;
    private removeUserTimer;
    private renderTypingIndicatorAvatars;
    render(): JSX.Element;
}
export {};
