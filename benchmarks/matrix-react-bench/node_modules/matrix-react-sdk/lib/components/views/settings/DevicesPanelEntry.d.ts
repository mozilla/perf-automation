import React from 'react';
import { IMyDevice } from 'matrix-js-sdk/src/client';
interface IProps {
    device: IMyDevice;
    isOwnDevice: boolean;
    verified: boolean | null;
    canBeVerified: boolean;
    onDeviceChange: () => void;
    onDeviceToggled: (device: IMyDevice) => void;
    selected: boolean;
}
interface IState {
    renaming: boolean;
    displayName: string;
}
export default class DevicesPanelEntry extends React.Component<IProps, IState> {
    constructor(props: IProps);
    private onDeviceToggled;
    private onRename;
    private onChangeDisplayName;
    private onRenameSubmit;
    private onRenameCancel;
    private onOwnDeviceSignOut;
    private verify;
    render(): JSX.Element;
}
export {};
