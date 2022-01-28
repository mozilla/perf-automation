import React from 'react';
import { IMediaDevices, MediaDeviceKindEnum } from "../../../../../MediaDeviceHandler";
interface IState extends Record<MediaDeviceKindEnum, string> {
    mediaDevices: IMediaDevices;
}
export default class VoiceUserSettingsTab extends React.Component<{}, IState> {
    constructor(props: {});
    componentDidMount(): Promise<void>;
    private refreshMediaDevices;
    private requestMediaPermissions;
    private setDevice;
    private changeWebRtcMethod;
    private changeFallbackICEServerAllowed;
    private renderDeviceOptions;
    private renderDropdown;
    render(): JSX.Element;
}
export {};
