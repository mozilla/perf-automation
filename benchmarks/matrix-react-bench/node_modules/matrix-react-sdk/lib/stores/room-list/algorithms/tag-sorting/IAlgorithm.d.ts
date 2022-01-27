import { Room } from "matrix-js-sdk/src/models/room";
import { TagID } from "../../models";
/**
 * Represents a tag sorting algorithm.
 */
export interface IAlgorithm {
    /**
     * Sorts the given rooms according to the sorting rules of the algorithm.
     * @param {Room[]} rooms The rooms to sort.
     * @param {TagID} tagId The tag ID in which the rooms are being sorted.
     * @returns {Room[]} Returns the sorted rooms.
     */
    sortRooms(rooms: Room[], tagId: TagID): Room[];
}
