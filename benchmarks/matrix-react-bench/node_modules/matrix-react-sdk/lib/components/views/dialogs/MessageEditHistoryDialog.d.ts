import React from 'react';
import { MatrixEvent } from "matrix-js-sdk/src/models/event";
import { IDialogProps } from "./IDialogProps";
interface IProps extends IDialogProps {
    mxEvent: MatrixEvent;
}
interface IState {
    originalEvent: MatrixEvent;
    error: {
        errcode: string;
    };
    events: MatrixEvent[];
    nextBatch: string;
    isLoading: boolean;
    isTwelveHour: boolean;
}
export default class MessageEditHistoryDialog extends React.PureComponent<IProps, IState> {
    constructor(props: IProps);
    private loadMoreEdits;
    private locallyRedactEventsIfNeeded;
    componentDidMount(): void;
    private renderEdits;
    render(): JSX.Element;
}
export {};
