import React from 'react';
import { IThreepid } from "matrix-js-sdk/src/@types/threepids";
interface IEmailAddressProps {
    email: IThreepid;
}
interface IEmailAddressState {
    verifying: boolean;
    addTask: any;
    continueDisabled: boolean;
    bound: boolean;
}
export declare class EmailAddress extends React.Component<IEmailAddressProps, IEmailAddressState> {
    constructor(props: IEmailAddressProps);
    UNSAFE_componentWillReceiveProps(nextProps: IEmailAddressProps): void;
    private changeBinding;
    private changeBindingTangledAddBind;
    private onRevokeClick;
    private onShareClick;
    private onContinueClick;
    render(): JSX.Element;
}
interface IProps {
    emails: IThreepid[];
}
export default class EmailAddresses extends React.Component<IProps> {
    render(): JSX.Element;
}
export {};
