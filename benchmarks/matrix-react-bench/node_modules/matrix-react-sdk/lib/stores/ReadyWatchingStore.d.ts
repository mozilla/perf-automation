/// <reference types="node" />
import { MatrixClient } from "matrix-js-sdk/src/client";
import { ActionPayload } from "../dispatcher/payloads";
import { Dispatcher } from "flux";
import { IDestroyable } from "../utils/IDestroyable";
import { EventEmitter } from "events";
export declare abstract class ReadyWatchingStore extends EventEmitter implements IDestroyable {
    protected readonly dispatcher: Dispatcher<ActionPayload>;
    protected matrixClient: MatrixClient;
    private readonly dispatcherRef;
    constructor(dispatcher: Dispatcher<ActionPayload>);
    get mxClient(): MatrixClient;
    useUnitTestClient(cli: MatrixClient): void;
    destroy(): void;
    protected onReady(): Promise<void>;
    protected onNotReady(): Promise<void>;
    private onAction;
}
