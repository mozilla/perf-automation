import { Dispatcher } from "flux";
import { Action } from "./actions";
import { ActionPayload } from "./payloads";
/**
 * A dispatcher for ActionPayloads (the default within the SDK).
 */
export declare class MatrixDispatcher extends Dispatcher<ActionPayload> {
    /**
     * Dispatches an event on the dispatcher's event bus.
     * @param {ActionPayload} payload Required. The payload to dispatch.
     * @param {boolean=false} sync Optional. Pass true to dispatch
     *        synchronously. This is useful for anything triggering
     *        an operation that the browser requires user interaction
     *        for. Default false (async).
     */
    dispatch<T extends ActionPayload>(payload: T, sync?: boolean): void;
    /**
     * Shorthand for dispatch({action: Action.WHATEVER}, sync). No additional
     * properties can be included with this version.
     * @param {Action} action The action to dispatch.
     * @param {boolean=false} sync Whether the dispatch should be sync or not.
     * @see dispatch(action: ActionPayload, sync: boolean)
     */
    fire(action: Action, sync?: boolean): void;
}
export declare const defaultDispatcher: MatrixDispatcher;
export default defaultDispatcher;
