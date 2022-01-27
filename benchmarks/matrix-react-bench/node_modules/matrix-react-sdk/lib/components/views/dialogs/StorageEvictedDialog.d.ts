import React from 'react';
import { IDialogProps } from "./IDialogProps";
interface IProps extends IDialogProps {
}
export default class StorageEvictedDialog extends React.Component<IProps> {
    private sendBugReport;
    private onSignOutClick;
    render(): JSX.Element;
}
export {};
