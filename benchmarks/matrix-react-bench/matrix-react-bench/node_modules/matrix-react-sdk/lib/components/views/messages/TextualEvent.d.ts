import React from "react";
import { MatrixEvent } from "matrix-js-sdk/src/models/event";
interface IProps {
    mxEvent: MatrixEvent;
}
export default class TextualEvent extends React.Component<IProps> {
    static contextType: React.Context<import("../../structures/RoomView").IRoomState>;
    render(): JSX.Element;
}
export {};
