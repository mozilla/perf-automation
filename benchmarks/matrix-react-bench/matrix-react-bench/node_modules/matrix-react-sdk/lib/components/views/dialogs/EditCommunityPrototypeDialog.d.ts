import React from 'react';
import { IDialogProps } from "./IDialogProps";
interface IProps extends IDialogProps {
    communityId: string;
}
interface IState {
    name: string;
    error: string;
    busy: boolean;
    currentAvatarUrl: string;
    avatarFile: File;
    avatarPreview: string;
}
export default class EditCommunityPrototypeDialog extends React.PureComponent<IProps, IState> {
    private avatarUploadRef;
    constructor(props: IProps);
    private onNameChange;
    private onSubmit;
    private onAvatarChanged;
    private onChangeAvatar;
    render(): JSX.Element;
}
export {};
