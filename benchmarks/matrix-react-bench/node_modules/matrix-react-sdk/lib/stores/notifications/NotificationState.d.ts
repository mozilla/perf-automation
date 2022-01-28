/// <reference types="node" />
import { EventEmitter } from "events";
import { NotificationColor } from "./NotificationColor";
import { IDestroyable } from "../../utils/IDestroyable";
export declare const NOTIFICATION_STATE_UPDATE = "update";
export declare abstract class NotificationState extends EventEmitter implements IDestroyable {
    protected _symbol: string;
    protected _count: number;
    protected _color: NotificationColor;
    get symbol(): string;
    get count(): number;
    get color(): NotificationColor;
    get isIdle(): boolean;
    get isUnread(): boolean;
    get hasUnreadCount(): boolean;
    get hasMentions(): boolean;
    protected emitIfUpdated(snapshot: NotificationStateSnapshot): void;
    protected snapshot(): NotificationStateSnapshot;
    destroy(): void;
}
export declare class NotificationStateSnapshot {
    private readonly symbol;
    private readonly count;
    private readonly color;
    constructor(state: NotificationState);
    isDifferentFrom(other: NotificationState): boolean;
}
