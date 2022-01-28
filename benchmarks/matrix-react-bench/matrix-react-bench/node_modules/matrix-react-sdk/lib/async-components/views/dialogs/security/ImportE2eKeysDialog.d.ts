import React from 'react';
import { MatrixClient } from 'matrix-js-sdk/src/client';
import { IDialogProps } from "../../../../components/views/dialogs/IDialogProps";
declare enum Phase {
    Edit = "edit",
    Importing = "importing"
}
interface IProps extends IDialogProps {
    matrixClient: MatrixClient;
}
interface IState {
    enableSubmit: boolean;
    phase: Phase;
    errStr: string;
}
export default class ImportE2eKeysDialog extends React.Component<IProps, IState> {
    private unmounted;
    private file;
    private passphrase;
    constructor(props: IProps);
    componentWillUnmount(): void;
    private onFormChange;
    private onFormSubmit;
    private startImport;
    private onCancelClick;
    render(): JSX.Element;
}
export {};
