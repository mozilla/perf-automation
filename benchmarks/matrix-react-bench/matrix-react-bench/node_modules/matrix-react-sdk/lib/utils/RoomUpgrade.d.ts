import { Room } from "matrix-js-sdk/src/models/room";
import { MatrixClient } from "matrix-js-sdk/src/client";
interface IProgress {
    roomUpgraded: boolean;
    roomSynced?: boolean;
    inviteUsersProgress?: number;
    inviteUsersTotal: number;
    updateSpacesProgress?: number;
    updateSpacesTotal: number;
}
export declare function awaitRoomDownSync(cli: MatrixClient, roomId: string): Promise<Room>;
export declare function upgradeRoom(room: Room, targetVersion: string, inviteUsers?: boolean, handleError?: boolean, updateSpaces?: boolean, awaitRoom?: boolean, progressCallback?: (progress: IProgress) => void): Promise<string>;
export {};
