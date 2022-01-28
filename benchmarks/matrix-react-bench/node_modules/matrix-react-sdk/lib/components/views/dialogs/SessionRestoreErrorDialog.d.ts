import React from 'react';
import { IDialogProps } from "./IDialogProps";
interface IProps extends IDialogProps {
    error: Error;
}
export default class SessionRestoreErrorDialog extends React.Component<IProps> {
    private sendBugReport;
    private onClearStorageClick;
    private onRefreshClick;
    render(): JSX.Element;
}
export {};
