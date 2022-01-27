/// <reference types="node" />
import { EventEmitter } from "events";
declare enum EventEmitterEvents {
    NewListener = "newListener",
    RemoveListener = "removeListener"
}
/**
 * Typed Event Emitter class which can act as a Base Model for all our model
 * and communication events.
 * This makes it much easier for us to distinguish between events, as we now need
 * to properly type this, so that our events are not stringly-based and prone
 * to silly typos.
 */
export declare abstract class TypedEventEmitter<Events extends string> extends EventEmitter {
    addListener(event: Events | EventEmitterEvents, listener: (...args: any[]) => void): this;
    emit(event: Events | EventEmitterEvents, ...args: any[]): boolean;
    eventNames(): (Events | EventEmitterEvents)[];
    listenerCount(event: Events | EventEmitterEvents): number;
    listeners(event: Events | EventEmitterEvents): Function[];
    off(event: Events | EventEmitterEvents, listener: (...args: any[]) => void): this;
    on(event: Events | EventEmitterEvents, listener: (...args: any[]) => void): this;
    once(event: Events | EventEmitterEvents, listener: (...args: any[]) => void): this;
    prependListener(event: Events | EventEmitterEvents, listener: (...args: any[]) => void): this;
    prependOnceListener(event: Events | EventEmitterEvents, listener: (...args: any[]) => void): this;
    removeAllListeners(event?: Events | EventEmitterEvents): this;
    removeListener(event: Events | EventEmitterEvents, listener: (...args: any[]) => void): this;
    rawListeners(event: Events | EventEmitterEvents): Function[];
}
export {};
//# sourceMappingURL=typed-event-emitter.d.ts.map