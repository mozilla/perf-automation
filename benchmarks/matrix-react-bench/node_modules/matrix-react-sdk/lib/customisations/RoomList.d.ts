import { Room } from "matrix-js-sdk/src/models/room";
/**
 * Determines if a room is visible in the room list or not. By default,
 * all rooms are visible. Where special handling is performed by Element,
 * those rooms will not be able to override their visibility in the room
 * list - Element will make the decision without calling this function.
 *
 * This function should be as fast as possible to avoid slowing down the
 * client.
 * @param {Room} room The room to check the visibility of.
 * @returns {boolean} True if the room should be visible, false otherwise.
 */
declare function isRoomVisible(room: Room): boolean;
export interface IRoomListCustomisations {
    isRoomVisible?: typeof isRoomVisible;
}
export declare const RoomListCustomisations: IRoomListCustomisations;
export {};
