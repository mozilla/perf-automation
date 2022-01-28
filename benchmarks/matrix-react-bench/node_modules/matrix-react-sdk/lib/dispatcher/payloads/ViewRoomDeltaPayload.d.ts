import { ActionPayload } from "../payloads";
import { Action } from "../actions";
export interface ViewRoomDeltaPayload extends ActionPayload {
    action: Action.ViewRoomDelta;
    /**
     * The delta index of the room to view.
     */
    delta: number;
    /**
     * Optionally, whether or not to filter to unread (Bold/Grey/Red) rooms only. (Default: false)
     */
    unread?: boolean;
}
