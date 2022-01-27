/// <reference types="node" />
import { Room } from "matrix-js-sdk/src/models/room";
import { FilterKind, IFilterCondition } from "./IFilterCondition";
import { Group } from "matrix-js-sdk/src/models/group";
import { EventEmitter } from "events";
import { IDestroyable } from "../../../utils/IDestroyable";
/**
 * A filter condition for the room list which reveals rooms which
 * are a member of a given community.
 */
export declare class CommunityFilterCondition extends EventEmitter implements IFilterCondition, IDestroyable {
    private community;
    private roomIds;
    private userIds;
    constructor(community: Group);
    get kind(): FilterKind;
    isVisible(room: Room): boolean;
    private onStoreUpdate;
    destroy(): void;
}
