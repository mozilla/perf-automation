import { Room } from "matrix-js-sdk/src/models/room";
export declare class VisibilityProvider {
    private static internalInstance;
    private constructor();
    static get instance(): VisibilityProvider;
    onNewInvitedRoom(room: Room): Promise<void>;
    isRoomVisible(room?: Room): boolean;
}
