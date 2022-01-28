import React from 'react';
interface IProps {
    onFinished: (success: boolean) => void;
    initialText?: string;
    label?: string;
    error?: Error;
}
interface IState {
    sendLogs: boolean;
    busy: boolean;
    err: string;
    issueUrl: string;
    text: string;
    progress: string;
    downloadBusy: boolean;
    downloadProgress: string;
}
export default class BugReportDialog extends React.Component<IProps, IState> {
    private unmounted;
    constructor(props: any);
    componentWillUnmount(): void;
    private onCancel;
    private onSubmit;
    private onDownload;
    private onTextChange;
    private onIssueUrlChange;
    private sendProgressCallback;
    private downloadProgressCallback;
    render(): JSX.Element;
}
export {};
