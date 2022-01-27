import React from 'react';
import { MatrixEvent } from "matrix-js-sdk/src/models/event";
interface IProps {
    mxEvent: MatrixEvent;
    onMessageAllowed: () => void;
}
export default class MjolnirBody extends React.Component<IProps> {
    private onAllowClick;
    render(): JSX.Element;
}
export {};
