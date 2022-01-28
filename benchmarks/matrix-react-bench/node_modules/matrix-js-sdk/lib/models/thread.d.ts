import { MatrixClient } from "../matrix";
import { MatrixEvent } from "./event";
import { Room } from './room';
import { TypedEventEmitter } from "./typed-event-emitter";
export declare enum ThreadEvent {
    New = "Thread.new",
    Ready = "Thread.ready",
    Update = "Thread.update"
}
/**
 * @experimental
 */
export declare class Thread extends TypedEventEmitter<ThreadEvent> {
    readonly room: Room;
    readonly client: MatrixClient;
    /**
     * A reference to the event ID at the top of the thread
     */
    private root;
    /**
     * A reference to all the events ID at the bottom of the threads
     */
    readonly timelineSet: any;
    private _currentUserParticipated;
    constructor(events: MatrixEvent[], room: Room, client: MatrixClient);
    onEcho: (event: MatrixEvent) => void;
    /**
     * Add an event to the thread and updates
     * the tail/root references if needed
     * Will fire "Thread.update"
     * @param event The event to add
     */
    addEvent(event: MatrixEvent, toStartOfTimeline?: boolean): Promise<void>;
    /**
     * Finds an event by ID in the current thread
     */
    findEventById(eventId: string): any;
    /**
     * Return last reply to the thread
     */
    get lastReply(): MatrixEvent;
    /**
     * The thread ID, which is the same as the root event ID
     */
    get id(): string;
    /**
     * The thread root event
     */
    get rootEvent(): MatrixEvent;
    get roomId(): string;
    /**
     * The number of messages in the thread
     * Only count rel_type=m.thread as we want to
     * exclude annotations from that number
     */
    get length(): number;
    /**
     * A getter for the last event added to the thread
     */
    get replyToEvent(): MatrixEvent;
    get events(): MatrixEvent[];
    merge(thread: Thread): void;
    has(eventId: string): boolean;
    get hasCurrentUserParticipated(): boolean;
}
//# sourceMappingURL=thread.d.ts.map