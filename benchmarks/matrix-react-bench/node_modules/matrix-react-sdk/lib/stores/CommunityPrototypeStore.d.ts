import { AsyncStoreWithClient } from "./AsyncStoreWithClient";
import { ActionPayload } from "../dispatcher/payloads";
import { Room } from "matrix-js-sdk/src/models/room";
interface IState {
}
export interface IRoomProfile {
    displayName: string;
    avatarMxc: string;
}
export declare class CommunityPrototypeStore extends AsyncStoreWithClient<IState> {
    private static internalInstance;
    private constructor();
    static get instance(): CommunityPrototypeStore;
    static getUpdateEventName(roomId: string): string;
    getSelectedCommunityId(): string;
    getSelectedCommunityName(): string;
    getSelectedCommunityGeneralChat(): Room;
    getCommunityName(communityId: string): string;
    getCommunityProfile(communityId: string): {
        name?: string;
        avatarUrl?: string;
    };
    getGeneralChat(communityId: string): Room;
    isAdminOf(communityId: string): boolean;
    canInviteTo(communityId: string): boolean;
    protected onAction(payload: ActionPayload): Promise<any>;
    getInviteProfile(roomId: string): IRoomProfile;
    protected onReady(): Promise<any>;
}
export {};
