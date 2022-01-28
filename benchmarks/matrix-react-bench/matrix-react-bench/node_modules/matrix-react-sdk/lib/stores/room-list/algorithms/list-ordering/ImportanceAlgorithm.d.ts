import { Room } from "matrix-js-sdk/src/models/room";
import { RoomUpdateCause, TagID } from "../../models";
import { SortAlgorithm } from "../models";
import { OrderingAlgorithm } from "./OrderingAlgorithm";
/**
 * An implementation of the "importance" algorithm for room list sorting. Where
 * the tag sorting algorithm does not interfere, rooms will be ordered into
 * categories of varying importance to the user. Alphabetical sorting does not
 * interfere with this algorithm, however manual ordering does.
 *
 * The importance of a room is defined by the kind of notifications, if any, are
 * present on the room. These are classified internally as Unsent, Red, Grey,
 * Bold, and Idle. 'Unsent' rooms have unsent messages, Red rooms have mentions,
 * grey have unread messages, bold is a less noisy version of grey, and idle
 * means all activity has been seen by the user.
 *
 * The algorithm works by monitoring all room changes, including new messages in
 * tracked rooms, to determine if it needs a new category or different placement
 * within the same category. For more information, see the comments contained
 * within the class.
 */
export declare class ImportanceAlgorithm extends OrderingAlgorithm {
    private indices;
    constructor(tagId: TagID, initialSortingAlgorithm: SortAlgorithm);
    private categorizeRooms;
    private getRoomCategory;
    setRooms(rooms: Room[]): void;
    private handleSplice;
    handleRoomUpdate(room: Room, cause: RoomUpdateCause): boolean;
    private sortCategory;
    private getCategoryFromIndices;
    private moveRoomIndexes;
    private alterCategoryPositionBy;
}
