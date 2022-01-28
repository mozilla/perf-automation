import React from 'react';
import { IThreepid } from "matrix-js-sdk/src/@types/threepids";
interface IExistingPhoneNumberProps {
    msisdn: IThreepid;
    onRemoved: (phoneNumber: IThreepid) => void;
}
interface IExistingPhoneNumberState {
    verifyRemove: boolean;
}
export declare class ExistingPhoneNumber extends React.Component<IExistingPhoneNumberProps, IExistingPhoneNumberState> {
    constructor(props: IExistingPhoneNumberProps);
    private onRemove;
    private onDontRemove;
    private onActuallyRemove;
    render(): JSX.Element;
}
interface IProps {
    msisdns: IThreepid[];
    onMsisdnsChange: (phoneNumbers: Partial<IThreepid>[]) => void;
}
interface IState {
    verifying: boolean;
    verifyError: string;
    verifyMsisdn: string;
    addTask: any;
    continueDisabled: boolean;
    phoneCountry: string;
    newPhoneNumber: string;
    newPhoneNumberCode: string;
}
export default class PhoneNumbers extends React.Component<IProps, IState> {
    constructor(props: IProps);
    private onRemoved;
    private onChangeNewPhoneNumber;
    private onChangeNewPhoneNumberCode;
    private onAddClick;
    private onContinueClick;
    private onCountryChanged;
    render(): JSX.Element;
}
export {};
