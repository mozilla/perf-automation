import React from 'react';
import { IThreepid } from "matrix-js-sdk/src/@types/threepids";
interface IExistingEmailAddressProps {
    email: IThreepid;
    onRemoved: (emails: IThreepid) => void;
}
interface IExistingEmailAddressState {
    verifyRemove: boolean;
}
export declare class ExistingEmailAddress extends React.Component<IExistingEmailAddressProps, IExistingEmailAddressState> {
    constructor(props: IExistingEmailAddressProps);
    private onRemove;
    private onDontRemove;
    private onActuallyRemove;
    render(): JSX.Element;
}
interface IProps {
    emails: IThreepid[];
    onEmailsChange: (emails: Partial<IThreepid>[]) => void;
}
interface IState {
    verifying: boolean;
    addTask: any;
    continueDisabled: boolean;
    newEmailAddress: string;
}
export default class EmailAddresses extends React.Component<IProps, IState> {
    constructor(props: IProps);
    private onRemoved;
    private onChangeNewEmailAddress;
    private onAddClick;
    private onContinueClick;
    render(): JSX.Element;
}
export {};
