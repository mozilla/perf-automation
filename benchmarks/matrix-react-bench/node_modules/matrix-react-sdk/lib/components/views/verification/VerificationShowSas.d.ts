import React from 'react';
import { IGeneratedSas } from "matrix-js-sdk/src/crypto/verification/SAS";
import { DeviceInfo } from "matrix-js-sdk/src//crypto/deviceinfo";
interface IProps {
    pending?: boolean;
    displayName?: string;
    device?: DeviceInfo;
    onDone: () => void;
    onCancel: () => void;
    sas: IGeneratedSas;
    isSelf?: boolean;
    inDialog?: boolean;
}
interface IState {
    pending: boolean;
    cancelling?: boolean;
}
export default class VerificationShowSas extends React.Component<IProps, IState> {
    constructor(props: IProps);
    componentWillMount(): void;
    private onMatchClick;
    private onDontMatchClick;
    render(): JSX.Element;
}
export {};
