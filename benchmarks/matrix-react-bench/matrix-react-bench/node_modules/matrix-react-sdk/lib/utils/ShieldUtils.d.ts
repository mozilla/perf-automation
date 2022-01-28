import { MatrixClient } from "matrix-js-sdk/src/client";
import { Room } from "matrix-js-sdk/src/models/room";
export declare enum E2EStatus {
    Warning = "warning",
    Verified = "verified",
    Normal = "normal"
}
export declare function shieldStatusForRoom(client: MatrixClient, room: Room): Promise<E2EStatus>;
