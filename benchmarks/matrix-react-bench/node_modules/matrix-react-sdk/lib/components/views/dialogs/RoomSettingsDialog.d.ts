import React from 'react';
export declare const ROOM_GENERAL_TAB = "ROOM_GENERAL_TAB";
export declare const ROOM_SECURITY_TAB = "ROOM_SECURITY_TAB";
export declare const ROOM_ROLES_TAB = "ROOM_ROLES_TAB";
export declare const ROOM_NOTIFICATIONS_TAB = "ROOM_NOTIFICATIONS_TAB";
export declare const ROOM_BRIDGES_TAB = "ROOM_BRIDGES_TAB";
export declare const ROOM_ADVANCED_TAB = "ROOM_ADVANCED_TAB";
interface IProps {
    roomId: string;
    onFinished: (success: boolean) => void;
    initialTabId?: string;
}
interface IState {
    roomName: string;
}
export default class RoomSettingsDialog extends React.Component<IProps, IState> {
    private dispatcherRef;
    constructor(props: IProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private onAction;
    private onRoomName;
    private getTabs;
    render(): JSX.Element;
}
export {};
