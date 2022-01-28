import { Room } from "matrix-js-sdk/src/models/room";
import { RoomState } from "matrix-js-sdk/src/models/room-state";
declare type Mapper<T> = (roomState: RoomState) => T;
export declare const useRoomState: <T extends unknown = RoomState>(room?: Room, mapper?: Mapper<T>) => T;
export {};
