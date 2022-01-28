/// <reference types="node" />
import { EchoContext } from "./EchoContext";
import { RunFn } from "./EchoTransaction";
import { MatrixClient } from "matrix-js-sdk/src/client";
import { EventEmitter } from "events";
export declare function implicitlyReverted(): Promise<void>;
export declare const PROPERTY_UPDATED = "property_updated";
export declare abstract class GenericEchoChamber<C extends EchoContext, K, V> extends EventEmitter {
    readonly context: C;
    private lookupFn;
    private cache;
    protected matrixClient: MatrixClient;
    protected constructor(context: C, lookupFn: (key: K) => V);
    setClient(client: MatrixClient): void;
    protected abstract onClientChanged(oldClient: MatrixClient, newClient: MatrixClient): any;
    /**
     * Gets a value. If the key is in flight, the cached value will be returned. If
     * the key is not in flight then the lookupFn provided to this class will be
     * called instead.
     * @param key The key to look up.
     * @returns The value for the key.
     */
    getValue(key: K): V;
    private cacheVal;
    private decacheKey;
    protected markEchoReceived(key: K): void;
    setValue(auditName: string, key: K, targetVal: V, runFn: RunFn, revertFn: RunFn): void;
}
