import React from 'react';
import { IThreepid } from "matrix-js-sdk/src/@types/threepids";
interface IPhoneNumberProps {
    msisdn: IThreepid;
}
interface IPhoneNumberState {
    verifying: boolean;
    verificationCode: string;
    addTask: any;
    continueDisabled: boolean;
    bound: boolean;
    verifyError: string;
}
export declare class PhoneNumber extends React.Component<IPhoneNumberProps, IPhoneNumberState> {
    constructor(props: IPhoneNumberProps);
    UNSAFE_componentWillReceiveProps(nextProps: IPhoneNumberProps): void;
    private changeBinding;
    private changeBindingTangledAddBind;
    private onRevokeClick;
    private onShareClick;
    private onVerificationCodeChange;
    private onContinueClick;
    render(): JSX.Element;
}
interface IProps {
    msisdns: IThreepid[];
}
export default class PhoneNumbers extends React.Component<IProps> {
    render(): JSX.Element;
}
export {};
