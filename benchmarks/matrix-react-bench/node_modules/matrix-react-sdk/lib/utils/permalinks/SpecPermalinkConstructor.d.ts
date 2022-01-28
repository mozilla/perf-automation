import PermalinkConstructor, { PermalinkParts } from "./PermalinkConstructor";
export declare const host = "matrix.to";
export declare const baseUrl: string;
/**
 * Generates matrix.to permalinks
 */
export default class SpecPermalinkConstructor extends PermalinkConstructor {
    constructor();
    forEvent(roomId: string, eventId: string, serverCandidates: string[]): string;
    forRoom(roomIdOrAlias: string, serverCandidates: string[]): string;
    forUser(userId: string): string;
    forGroup(groupId: string): string;
    forEntity(entityId: string): string;
    isPermalinkHost(testHost: string): boolean;
    encodeServerCandidates(candidates: string[]): string;
    parsePermalink(fullUrl: string): PermalinkParts;
}
