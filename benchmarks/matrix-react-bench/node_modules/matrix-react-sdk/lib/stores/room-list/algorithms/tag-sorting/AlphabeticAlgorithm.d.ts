import { Room } from "matrix-js-sdk/src/models/room";
import { TagID } from "../../models";
import { IAlgorithm } from "./IAlgorithm";
/**
 * Sorts rooms according to the browser's determination of alphabetic.
 */
export declare class AlphabeticAlgorithm implements IAlgorithm {
    sortRooms(rooms: Room[], tagId: TagID): Room[];
}
