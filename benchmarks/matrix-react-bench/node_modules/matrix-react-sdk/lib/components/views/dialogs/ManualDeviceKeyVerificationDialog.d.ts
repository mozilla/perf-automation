import React from 'react';
import { DeviceInfo } from "matrix-js-sdk/src/crypto/deviceinfo";
import { IDialogProps } from "./IDialogProps";
interface IProps extends IDialogProps {
    userId: string;
    device: DeviceInfo;
}
export default class ManualDeviceKeyVerificationDialog extends React.Component<IProps> {
    private onLegacyFinished;
    render(): JSX.Element;
}
export {};
