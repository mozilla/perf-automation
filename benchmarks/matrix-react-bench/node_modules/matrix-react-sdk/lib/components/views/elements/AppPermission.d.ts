import React from 'react';
import { RoomMember } from 'matrix-js-sdk/src/models/room-member';
interface IProps {
    url: string;
    creatorUserId: string;
    roomId: string;
    onPermissionGranted: () => void;
    isRoomEncrypted?: boolean;
}
interface IState {
    roomMember: RoomMember;
    isWrapped: boolean;
    widgetDomain: string;
}
export default class AppPermission extends React.Component<IProps, IState> {
    static defaultProps: Partial<IProps>;
    constructor(props: IProps);
    private parseWidgetUrl;
    render(): JSX.Element;
}
export {};
