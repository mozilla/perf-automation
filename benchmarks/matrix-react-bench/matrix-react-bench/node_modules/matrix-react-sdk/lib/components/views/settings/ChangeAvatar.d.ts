import React from 'react';
import { Room } from 'matrix-js-sdk/src/models/room';
interface IProps {
    initialAvatarUrl?: string;
    room?: Room;
    showUploadSection?: boolean;
    width?: number;
    height?: number;
    className?: string;
}
interface IState {
    avatarUrl?: string;
    errorText?: string;
    phase?: Phases;
}
declare enum Phases {
    Display = "display",
    Uploading = "uploading",
    Error = "error"
}
export default class ChangeAvatar extends React.Component<IProps, IState> {
    static defaultProps: {
        showUploadSection: boolean;
        className: string;
        width: number;
        height: number;
    };
    private avatarSet;
    constructor(props: IProps);
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(newProps: IProps): void;
    componentWillUnmount(): void;
    private onRoomStateEvents;
    private setAvatarFromFile;
    private onFileSelected;
    private onError;
    render(): JSX.Element;
}
export {};
