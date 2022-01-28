import { MatrixClient } from "matrix-js-sdk/src/client";
import { Room } from "matrix-js-sdk/src/models/room";
import { AsyncActionPayload } from "../dispatcher/payloads";
export default class RoomListActions {
    /**
     * Creates an action thunk that will do an asynchronous request to
     * tag room.
     *
     * @param {MatrixClient} matrixClient the matrix client to set the
     *                                    account data on.
     * @param {Room} room the room to tag.
     * @param {string} oldTag the tag to remove (unless oldTag ==== newTag)
     * @param {string} newTag the tag with which to tag the room.
     * @param {?number} oldIndex the previous position of the room in the
     *                           list of rooms.
     * @param {?number} newIndex the new position of the room in the list
     *                           of rooms.
     * @returns {AsyncActionPayload} an async action payload
     * @see asyncAction
     */
    static tagRoom(matrixClient: MatrixClient, room: Room, oldTag: string, newTag: string, oldIndex: number | null, newIndex: number | null): AsyncActionPayload;
}
