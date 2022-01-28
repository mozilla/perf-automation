import React from "react";
import { VerificationRequest } from "matrix-js-sdk/src/crypto/verification/request/VerificationRequest";
import { DeviceInfo } from "matrix-js-sdk/src/crypto/deviceinfo";
interface IProps {
    toastKey: string;
    request: VerificationRequest;
}
interface IState {
    counter: number;
    device?: DeviceInfo;
    ip?: string;
}
export default class VerificationRequestToast extends React.PureComponent<IProps, IState> {
    private intervalHandle;
    constructor(props: any);
    componentDidMount(): Promise<void>;
    componentWillUnmount(): void;
    private checkRequestIsPending;
    cancel: () => void;
    accept: () => Promise<void>;
    render(): JSX.Element;
}
export {};
