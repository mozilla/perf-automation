import { ActionPayload } from "../../dispatcher/payloads";
import { AsyncStoreWithClient } from "../AsyncStoreWithClient";
import { TagID } from "../room-list/models";
import { ListNotificationState } from "./ListNotificationState";
import { Room } from "matrix-js-sdk/src/models/room";
import { RoomNotificationState } from "./RoomNotificationState";
import { SummarizedNotificationState } from "./SummarizedNotificationState";
interface IState {
}
export declare class RoomNotificationStateStore extends AsyncStoreWithClient<IState> {
    private static internalInstance;
    private roomMap;
    private listMap;
    private constructor();
    /**
     * Gets a snapshot of notification state for all visible rooms. The number of states recorded
     * on the SummarizedNotificationState is equivalent to rooms.
     */
    get globalState(): SummarizedNotificationState;
    /**
     * Gets an instance of the list state class for the given tag.
     * @param tagId The tag to get the notification state for.
     * @returns The notification state for the tag.
     */
    getListState(tagId: TagID): ListNotificationState;
    /**
     * Gets a copy of the notification state for a room. The consumer should not
     * attempt to destroy the returned state as it may be shared with other
     * consumers.
     * @param room The room to get the notification state for.
     * @returns The room's notification state.
     */
    getRoomState(room: Room): RoomNotificationState;
    static get instance(): RoomNotificationStateStore;
    protected onNotReady(): Promise<any>;
    protected onAction(payload: ActionPayload): Promise<void>;
}
export {};
