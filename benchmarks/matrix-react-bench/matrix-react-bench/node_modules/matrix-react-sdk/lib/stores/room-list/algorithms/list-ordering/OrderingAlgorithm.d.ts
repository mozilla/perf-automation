import { Room } from "matrix-js-sdk/src/models/room";
import { RoomUpdateCause, TagID } from "../../models";
import { SortAlgorithm } from "../models";
/**
 * Represents a list ordering algorithm. Subclasses should populate the
 * `cachedOrderedRooms` field.
 */
export declare abstract class OrderingAlgorithm {
    protected tagId: TagID;
    protected cachedOrderedRooms: Room[];
    protected sortingAlgorithm: SortAlgorithm;
    protected constructor(tagId: TagID, initialSortingAlgorithm: SortAlgorithm);
    /**
     * The rooms as ordered by the algorithm.
     */
    get orderedRooms(): Room[];
    /**
     * Sets the sorting algorithm to use within the list.
     * @param newAlgorithm The new algorithm. Must be defined.
     * @returns Resolves when complete.
     */
    setSortAlgorithm(newAlgorithm: SortAlgorithm): void;
    /**
     * Sets the rooms the algorithm should be handling, implying a reconstruction
     * of the ordering.
     * @param rooms The rooms to use going forward.
     */
    abstract setRooms(rooms: Room[]): void;
    /**
     * Handle a room update. The Algorithm will only call this for causes which
     * the list ordering algorithm can handle within the same tag. For example,
     * tag changes will not be sent here.
     * @param room The room where the update happened.
     * @param cause The cause of the update.
     * @returns True if the update requires the Algorithm to update the presentation layers.
     */
    abstract handleRoomUpdate(room: Room, cause: RoomUpdateCause): boolean;
    protected getRoomIndex(room: Room): number;
}
