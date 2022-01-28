import React from 'react';
interface IProps {
    roomId: string;
}
interface IState {
    originalDisplayName: string;
    displayName: string;
    originalAvatarUrl: string;
    avatarUrl: string;
    avatarFile: File;
    originalTopic: string;
    topic: string;
    profileFieldsTouched: Record<string, boolean>;
    canSetName: boolean;
    canSetTopic: boolean;
    canSetAvatar: boolean;
}
export default class RoomProfileSettings extends React.Component<IProps, IState> {
    private avatarUpload;
    constructor(props: IProps);
    private uploadAvatar;
    private removeAvatar;
    private isSaveEnabled;
    private cancelProfileChanges;
    private saveProfile;
    private onDisplayNameChanged;
    private onTopicChanged;
    private onAvatarChanged;
    render(): JSX.Element;
}
export {};
