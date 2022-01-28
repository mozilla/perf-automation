import { DispatcherAction } from "./actions";
/**
 * The base dispatch type exposed by our dispatcher.
 */
export interface ActionPayload {
    [property: string]: any;
    action: DispatcherAction;
}
/**
 * The function the dispatcher calls when ready for an AsyncActionPayload. The
 * single argument is used to start a dispatch. First the dispatcher calls the
 * outer function, then when the called function is ready it calls the cb
 * function to issue the dispatch. It may call the callback repeatedly if needed.
 */
export declare type AsyncActionFn = (cb: (action: ActionPayload) => void) => void;
/**
 * An async version of ActionPayload
 */
export declare class AsyncActionPayload implements ActionPayload {
    /**
     * The function the dispatcher should call.
     */
    readonly fn: AsyncActionFn;
    /**
     * @deprecated Not used on AsyncActionPayload.
     */
    get action(): DispatcherAction;
    /**
     * Create a new AsyncActionPayload with the given ready function.
     * @param {AsyncActionFn} readyFn The function to be called when the
     * dispatcher is ready.
     */
    constructor(readyFn: AsyncActionFn);
}
