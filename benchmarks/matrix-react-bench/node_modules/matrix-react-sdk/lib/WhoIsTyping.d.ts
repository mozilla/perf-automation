import { Room } from "matrix-js-sdk/src/models/room";
import { RoomMember } from "matrix-js-sdk/src/models/room-member";
export declare function usersTypingApartFromMeAndIgnored(room: Room): RoomMember[];
export declare function usersTypingApartFromMe(room: Room): RoomMember[];
/**
 * Given a Room object and, optionally, a list of userID strings
 * to exclude, return a list of user objects who are typing.
 * @param {Room} room: room object to get users from.
 * @param {string[]} exclude: list of user mxids to exclude.
 * @returns {RoomMember[]} list of user objects who are typing.
 */
export declare function usersTyping(room: Room, exclude?: string[]): RoomMember[];
export declare function whoIsTypingString(whoIsTyping: RoomMember[], limit: number): string;
