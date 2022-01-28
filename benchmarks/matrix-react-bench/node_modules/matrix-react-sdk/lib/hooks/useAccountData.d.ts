import { MatrixClient } from "matrix-js-sdk/src/client";
import { Room } from "matrix-js-sdk/src/models/room";
export declare const useAccountData: <T extends {}>(cli: MatrixClient, eventType: string) => T;
export declare const useRoomAccountData: <T extends {}>(room: Room, eventType: string) => T;
