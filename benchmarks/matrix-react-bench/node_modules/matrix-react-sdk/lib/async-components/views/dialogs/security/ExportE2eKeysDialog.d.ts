import React from 'react';
import { MatrixClient } from 'matrix-js-sdk/src/client';
import { IDialogProps } from "../../../../components/views/dialogs/IDialogProps";
declare enum Phase {
    Edit = "edit",
    Exporting = "exporting"
}
interface IProps extends IDialogProps {
    matrixClient: MatrixClient;
}
interface IState {
    phase: Phase;
    errStr: string;
}
export default class ExportE2eKeysDialog extends React.Component<IProps, IState> {
    private unmounted;
    private passphrase1;
    private passphrase2;
    constructor(props: IProps);
    componentWillUnmount(): void;
    private onPassphraseFormSubmit;
    private startExport;
    private onCancelClick;
    render(): JSX.Element;
}
export {};
