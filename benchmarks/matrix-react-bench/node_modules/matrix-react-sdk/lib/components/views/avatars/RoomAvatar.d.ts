import React, { ComponentProps } from 'react';
import { Room } from 'matrix-js-sdk/src/models/room';
import { ResizeMethod } from 'matrix-js-sdk/src/@types/partials';
import BaseAvatar from './BaseAvatar';
import { IOOBData } from '../../../stores/ThreepidInviteStore';
interface IProps extends Omit<ComponentProps<typeof BaseAvatar>, "name" | "idName" | "url" | "onClick"> {
    room?: Room;
    oobData?: IOOBData & {
        roomId?: string;
    };
    width?: number;
    height?: number;
    resizeMethod?: ResizeMethod;
    viewAvatarOnClick?: boolean;
    className?: string;
    onClick?(): void;
}
interface IState {
    urls: string[];
}
export default class RoomAvatar extends React.Component<IProps, IState> {
    static defaultProps: {
        width: number;
        height: number;
        resizeMethod: string;
        oobData: {};
    };
    constructor(props: IProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    static getDerivedStateFromProps(nextProps: IProps): IState;
    private onRoomStateEvents;
    private static getImageUrls;
    private static getRoomAvatarUrl;
    private onRoomAvatarClick;
    render(): JSX.Element;
}
export {};
