import { Room } from "matrix-js-sdk/src/models/room";
import { TagID } from "../../models";
import { IAlgorithm } from "./IAlgorithm";
/**
 * Sorts rooms according to the tag's `order` property on the room.
 */
export declare class ManualAlgorithm implements IAlgorithm {
    sortRooms(rooms: Room[], tagId: TagID): Room[];
}
