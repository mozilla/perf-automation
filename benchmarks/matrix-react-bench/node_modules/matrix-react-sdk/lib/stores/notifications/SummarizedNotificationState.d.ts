import { NotificationState } from "./NotificationState";
/**
 * Summarizes a number of states into a unique snapshot. To populate, call
 * the add() function with the notification states to be included.
 *
 * Useful for community notification counts, global notification counts, etc.
 */
export declare class SummarizedNotificationState extends NotificationState {
    private totalStatesWithUnread;
    constructor();
    get numUnreadStates(): number;
    /**
     * Append a notification state to this snapshot, taking the loudest NotificationColor
     * of the two. By default this will not adopt the symbol of the other notification
     * state to prevent the count from being lost in typical usage.
     * @param other The other notification state to append.
     * @param includeSymbol If true, the notification state's symbol will be taken if one
     * is present.
     */
    add(other: NotificationState, includeSymbol?: boolean): void;
}
