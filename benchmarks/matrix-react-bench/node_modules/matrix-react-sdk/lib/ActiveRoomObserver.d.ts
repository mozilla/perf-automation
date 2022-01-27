/**
 * Consumes changes from the RoomViewStore and notifies specific things
 * about when the active room changes. Unlike listening for RoomViewStore
 * changes, you can subscribe to only changes relevant to a particular
 * room.
 *
 * TODO: If we introduce an observer for something else, factor out
 * the adding / removing of listeners & emitting into a common class.
 */
export declare class ActiveRoomObserver {
    private listeners;
    private _activeRoomId;
    private readonly roomStoreToken;
    constructor();
    get activeRoomId(): string;
    addListener(roomId: any, listener: any): void;
    removeListener(roomId: any, listener: any): void;
    private emit;
    private onRoomViewStoreUpdate;
}
declare const _default: ActiveRoomObserver;
export default _default;
