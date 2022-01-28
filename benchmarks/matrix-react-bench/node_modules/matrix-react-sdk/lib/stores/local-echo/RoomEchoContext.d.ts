import { EchoContext } from "./EchoContext";
import { Room } from "matrix-js-sdk/src/models/room";
export declare class RoomEchoContext extends EchoContext {
    readonly room: Room;
    constructor(room: Room);
}
