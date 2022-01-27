import React from "react";
interface IProps {
}
interface IState {
    completed: boolean;
    error: string;
    minimized: boolean;
}
export default class HostSignupDialog extends React.PureComponent<IProps, IState> {
    private iframeRef;
    private readonly config;
    constructor(props: IProps);
    private messageHandler;
    private maximizeDialog;
    private minimizeDialog;
    private closeDialog;
    private onCloseClick;
    private sendMessage;
    private sendAccountDetails;
    private onAccountDetailsDialogFinished;
    private onAccountDetailsRequest;
    componentDidMount(): void;
    componentWillUnmount(): Promise<void>;
    render(): React.ReactNode;
}
export {};
