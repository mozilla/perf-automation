import { Room } from "matrix-js-sdk/src/models/room";
import { RoomEchoChamber } from "./RoomEchoChamber";
import { AsyncStoreWithClient } from "../AsyncStoreWithClient";
import { ActionPayload } from "../../dispatcher/payloads";
import { EchoContext } from "./EchoContext";
import { ToastReference } from "../NonUrgentToastStore";
interface IState {
    toastRef: ToastReference;
}
export declare class EchoStore extends AsyncStoreWithClient<IState> {
    private static _instance;
    private caches;
    constructor();
    static get instance(): EchoStore;
    get contexts(): EchoContext[];
    getOrCreateChamberForRoom(room: Room): RoomEchoChamber;
    private checkContexts;
    protected onReady(): Promise<any>;
    protected onNotReady(): Promise<any>;
    protected onAction(payload: ActionPayload): Promise<any>;
}
export {};
