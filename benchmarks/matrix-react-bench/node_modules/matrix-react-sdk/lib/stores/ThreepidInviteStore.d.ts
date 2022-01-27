/// <reference types="node" />
import EventEmitter from "events";
import { RoomType } from "matrix-js-sdk/src/@types/event";
export interface IThreepidInviteWireFormat {
    email: string;
    signurl: string;
    room_name: string;
    room_avatar_url: string;
    inviter_name: string;
    guest_access_token?: string;
    guest_user_id?: string;
}
interface IPersistedThreepidInvite extends IThreepidInviteWireFormat {
    roomId: string;
}
export interface IThreepidInvite {
    id: string;
    roomId: string;
    toEmail: string;
    signUrl: string;
    roomName: string;
    roomAvatarUrl: string;
    inviterName: string;
}
export interface IOOBData {
    name?: string;
    avatarUrl?: string;
    inviterName?: string;
    room_name?: string;
    roomType?: RoomType;
}
export default class ThreepidInviteStore extends EventEmitter {
    private static _instance;
    static get instance(): ThreepidInviteStore;
    storeInvite(roomId: string, wireInvite: IThreepidInviteWireFormat): IThreepidInvite;
    getWireInvites(): IPersistedThreepidInvite[];
    getInvites(): IThreepidInvite[];
    pickBestInvite(): IThreepidInvite;
    resolveInvite(invite: IThreepidInvite): void;
    private generateIdOf;
    private translateInvite;
    translateToWireFormat(invite: IThreepidInvite): IThreepidInviteWireFormat;
}
export {};
