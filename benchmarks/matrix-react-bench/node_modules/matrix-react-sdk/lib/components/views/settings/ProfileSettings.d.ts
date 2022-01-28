import React from 'react';
interface IState {
    userId?: string;
    originalDisplayName?: string;
    displayName?: string;
    originalAvatarUrl?: string;
    avatarUrl?: string | ArrayBuffer;
    avatarFile?: File;
    enableProfileSave?: boolean;
}
export default class ProfileSettings extends React.Component<{}, IState> {
    private avatarUpload;
    constructor(props: {});
    private uploadAvatar;
    private removeAvatar;
    private cancelProfileChanges;
    private saveProfile;
    private onDisplayNameChanged;
    private onAvatarChanged;
    render(): JSX.Element;
}
export {};
