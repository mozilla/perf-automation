import React from 'react';
import { MatrixEvent } from "matrix-js-sdk/src/models/event";
interface IProps {
    event: MatrixEvent;
}
interface IState {
    stateKey: string;
    roomId: string;
    displayName: string;
    invited: boolean;
    canKick: boolean;
    senderName: string;
}
export default class ThirdPartyMemberInfo extends React.Component<IProps, IState> {
    private room;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onRoomStateEvents: (ev: any) => void;
    onCancel: () => void;
    onKickClick: () => void;
    render(): JSX.Element;
}
export {};
