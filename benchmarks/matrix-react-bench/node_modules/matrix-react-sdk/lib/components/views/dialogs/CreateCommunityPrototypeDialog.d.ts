import React from 'react';
import { IDialogProps } from "./IDialogProps";
interface IProps extends IDialogProps {
}
interface IState {
    name: string;
    localpart: string;
    error: string;
    busy: boolean;
    avatarFile: File;
    avatarPreview: string;
}
export default class CreateCommunityPrototypeDialog extends React.PureComponent<IProps, IState> {
    private avatarUploadRef;
    constructor(props: IProps);
    private onNameChange;
    private onSubmit;
    private onAvatarChanged;
    private onChangeAvatar;
    render(): JSX.Element;
}
export {};
