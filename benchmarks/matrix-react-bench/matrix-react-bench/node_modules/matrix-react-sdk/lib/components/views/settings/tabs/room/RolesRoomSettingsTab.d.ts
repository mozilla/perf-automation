import React from 'react';
import { RoomMember } from "matrix-js-sdk/src/models/room-member";
interface IBannedUserProps {
    canUnban?: boolean;
    member: RoomMember;
    by: string;
    reason?: string;
}
export declare class BannedUser extends React.Component<IBannedUserProps> {
    private onUnbanClick;
    render(): JSX.Element;
}
interface IProps {
    roomId: string;
}
export default class RolesRoomSettingsTab extends React.Component<IProps> {
    componentDidMount(): void;
    componentWillUnmount(): void;
    private onRoomMembership;
    private populateDefaultPlEvents;
    private onPowerLevelsChanged;
    private onUserPowerLevelChanged;
    render(): JSX.Element;
}
export {};
