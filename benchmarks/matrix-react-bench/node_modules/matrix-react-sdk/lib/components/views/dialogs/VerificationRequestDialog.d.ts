import React from 'react';
import { VerificationRequest } from "matrix-js-sdk/src/crypto/verification/request/VerificationRequest";
import { User } from 'matrix-js-sdk/src/models/user';
interface IProps {
    verificationRequest: VerificationRequest;
    verificationRequestPromise: Promise<VerificationRequest>;
    onFinished: () => void;
    member: User;
}
interface IState {
    verificationRequest: VerificationRequest;
}
export default class VerificationRequestDialog extends React.Component<IProps, IState> {
    constructor(props: any);
    render(): JSX.Element;
}
export {};
