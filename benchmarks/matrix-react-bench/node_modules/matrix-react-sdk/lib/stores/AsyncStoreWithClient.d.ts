import { MatrixClient } from "matrix-js-sdk/src/client";
import { AsyncStore } from "./AsyncStore";
import { ActionPayload } from "../dispatcher/payloads";
import { Dispatcher } from "flux";
import { ReadyWatchingStore } from "./ReadyWatchingStore";
export declare abstract class AsyncStoreWithClient<T extends Object> extends AsyncStore<T> {
    protected readyStore: ReadyWatchingStore;
    protected constructor(dispatcher: Dispatcher<ActionPayload>, initialState?: T);
    get matrixClient(): MatrixClient;
    protected onReady(): Promise<void>;
    protected onNotReady(): Promise<void>;
    protected abstract onAction(payload: ActionPayload): Promise<void>;
    protected onDispatch(payload: ActionPayload): Promise<void>;
}
