/// <reference types="node" />
import { EventEmitter } from 'events';
import { Dispatcher } from "flux";
import { ActionPayload } from "../dispatcher/payloads";
/**
 * The event/channel to listen for in an AsyncStore.
 */
export declare const UPDATE_EVENT = "update";
/**
 * Represents a minimal store which works similar to Flux stores. Instead
 * of everything needing to happen in a dispatch cycle, everything can
 * happen async to that cycle.
 *
 * The store operates by using Object.assign() to mutate state - it sends the
 * state objects (current and new) through the function onto a new empty
 * object. Because of this, it is recommended to break out your state to be as
 * safe as possible. The state mutations are also locked, preventing concurrent
 * writes.
 *
 * All updates to the store happen on the UPDATE_EVENT event channel with the
 * one argument being the instance of the store.
 *
 * To update the state, use updateState() and preferably await the result to
 * help prevent lock conflicts.
 */
export declare abstract class AsyncStore<T extends Object> extends EventEmitter {
    private dispatcher;
    private storeState;
    private lock;
    private readonly dispatcherRef;
    /**
     * Creates a new AsyncStore using the given dispatcher.
     * @param {Dispatcher<ActionPayload>} dispatcher The dispatcher to rely upon.
     * @param {T} initialState The initial state for the store.
     */
    protected constructor(dispatcher: Dispatcher<ActionPayload>, initialState?: T);
    /**
     * The current state of the store. Cannot be mutated.
     */
    protected get state(): T;
    /**
     * Stops the store's listening functions, such as the listener to the dispatcher.
     */
    protected stop(): void;
    /**
     * Updates the state of the store.
     * @param {T|*} newState The state to update in the store using Object.assign()
     */
    protected updateState(newState: T | Object): Promise<void>;
    /**
     * Resets the store's to the provided state or an empty object.
     * @param {T|*} newState The new state of the store.
     * @param {boolean} quiet If true, the function will not raise an UPDATE_EVENT.
     */
    protected reset(newState?: T | Object, quiet?: boolean): Promise<void>;
    /**
     * Called when the dispatcher broadcasts a dispatch event.
     * @param {ActionPayload} payload The event being dispatched.
     */
    protected abstract onDispatch(payload: ActionPayload): any;
}
