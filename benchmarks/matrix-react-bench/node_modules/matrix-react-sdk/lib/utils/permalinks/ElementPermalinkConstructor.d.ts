import PermalinkConstructor, { PermalinkParts } from "./PermalinkConstructor";
/**
 * Generates permalinks that self-reference the running webapp
 */
export default class ElementPermalinkConstructor extends PermalinkConstructor {
    private elementUrl;
    constructor(elementUrl: string);
    forEvent(roomId: string, eventId: string, serverCandidates: string[]): string;
    forRoom(roomIdOrAlias: string, serverCandidates?: string[]): string;
    forUser(userId: string): string;
    forGroup(groupId: string): string;
    forEntity(entityId: string): string;
    isPermalinkHost(testHost: string): boolean;
    encodeServerCandidates(candidates?: string[]): string;
    parsePermalink(fullUrl: string): PermalinkParts;
    /**
     * Parses an app route (`(user|room|group)/identifer`) to a Matrix entity
     * (room, user, group).
     * @param {string} route The app route
     * @returns {PermalinkParts}
     */
    static parseAppRoute(route: string): PermalinkParts;
}
