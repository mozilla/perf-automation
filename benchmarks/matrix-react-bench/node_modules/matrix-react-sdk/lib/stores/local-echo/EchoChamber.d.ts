import { RoomEchoChamber } from "./RoomEchoChamber";
import { Room } from "matrix-js-sdk/src/models/room";
/**
 * Semantic access to local echo
 */
export declare class EchoChamber {
    private constructor();
    static forRoom(room: Room): RoomEchoChamber;
}
