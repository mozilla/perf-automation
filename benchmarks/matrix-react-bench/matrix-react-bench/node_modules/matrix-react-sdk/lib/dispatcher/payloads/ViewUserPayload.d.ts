import { RoomMember } from "matrix-js-sdk/src/models/room-member";
import { User } from "matrix-js-sdk/src/models/user";
import { ActionPayload } from "../payloads";
import { Action } from "../actions";
export interface ViewUserPayload extends ActionPayload {
    action: Action.ViewUser;
    /**
     * The member to view. May be null or falsy to indicate that no member
     * should be shown (hide whichever relevant components).
     */
    member?: RoomMember | User;
}
