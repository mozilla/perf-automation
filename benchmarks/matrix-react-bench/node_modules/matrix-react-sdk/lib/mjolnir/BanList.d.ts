import { ListRule } from "./ListRule";
export declare const RULE_USER = "m.room.rule.user";
export declare const RULE_ROOM = "m.room.rule.room";
export declare const RULE_SERVER = "m.room.rule.server";
export declare const USER_RULE_TYPES: string[];
export declare const ROOM_RULE_TYPES: string[];
export declare const SERVER_RULE_TYPES: string[];
export declare const ALL_RULE_TYPES: string[];
export declare function ruleTypeToStable(rule: string, unstable?: boolean): string;
export declare class BanList {
    _rules: ListRule[];
    _roomId: string;
    constructor(roomId: string);
    get roomId(): string;
    get serverRules(): ListRule[];
    get userRules(): ListRule[];
    get roomRules(): ListRule[];
    banEntity(kind: string, entity: string, reason: string): Promise<any>;
    unbanEntity(kind: string, entity: string): Promise<any>;
    updateList(): void;
}
