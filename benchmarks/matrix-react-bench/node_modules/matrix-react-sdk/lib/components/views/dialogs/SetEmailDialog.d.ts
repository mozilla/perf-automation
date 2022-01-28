import React from 'react';
import { IDialogProps } from "./IDialogProps";
interface IProps extends IDialogProps {
    title: string;
}
interface IState {
    emailAddress: string;
    emailBusy: boolean;
}
export default class SetEmailDialog extends React.Component<IProps, IState> {
    private addThreepid;
    constructor(props: IProps);
    private onEmailAddressChanged;
    private onSubmit;
    private onCancelled;
    private onEmailDialogFinished;
    private verifyEmailAddress;
    render(): JSX.Element;
}
export {};
