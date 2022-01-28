import { MatrixEvent } from 'matrix-js-sdk/src/models/event';
import React from 'react';
interface IProps {
    onFinished: (success: boolean) => void;
}
export default class ConfirmRedactDialog extends React.Component<IProps> {
    render(): JSX.Element;
}
export declare function createRedactEventDialog({ mxEvent, onCloseDialog, }: {
    mxEvent: MatrixEvent;
    onCloseDialog?: () => void;
}): void;
export {};
