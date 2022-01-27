import React from 'react';
import { MatrixEvent } from "matrix-js-sdk/src/models/event";
interface IProps {
    mxEvent: MatrixEvent;
}
export default class RoomAvatarEvent extends React.Component<IProps> {
    private onAvatarClick;
    render(): JSX.Element;
}
export {};
