import { RoomMember } from "matrix-js-sdk/src/models/room-member";
import { User } from "matrix-js-sdk/src/models/user";
import { Room } from "matrix-js-sdk/src/models/room";
import { ResizeMethod } from "matrix-js-sdk/src/@types/partials";
export declare function avatarUrlForMember(member: RoomMember, width: number, height: number, resizeMethod: ResizeMethod): string;
export declare function avatarUrlForUser(user: Pick<User, "avatarUrl">, width: number, height: number, resizeMethod?: ResizeMethod): string | null;
export declare function defaultAvatarUrlForString(s: string): string;
/**
 * returns the first (non-sigil) character of 'name',
 * converted to uppercase
 * @param {string} name
 * @return {string} the first letter
 */
export declare function getInitialLetter(name: string): string;
export declare function avatarUrlForRoom(room: Room, width: number, height: number, resizeMethod?: ResizeMethod): string;
