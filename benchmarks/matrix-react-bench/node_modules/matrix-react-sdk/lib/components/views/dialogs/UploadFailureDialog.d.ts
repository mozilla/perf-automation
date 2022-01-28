import React from 'react';
import ContentMessages from '../../../ContentMessages';
import { IDialogProps } from "./IDialogProps";
interface IProps extends IDialogProps {
    badFiles: File[];
    totalFiles: number;
    contentMessages: ContentMessages;
}
export default class UploadFailureDialog extends React.Component<IProps> {
    private onCancelClick;
    private onUploadClick;
    render(): JSX.Element;
}
export {};
