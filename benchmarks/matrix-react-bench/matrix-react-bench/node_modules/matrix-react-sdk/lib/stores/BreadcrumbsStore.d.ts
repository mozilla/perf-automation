import { Room } from "matrix-js-sdk/src/models/room";
import { ActionPayload } from "../dispatcher/payloads";
import { AsyncStoreWithClient } from "./AsyncStoreWithClient";
interface IState {
    enabled?: boolean;
    rooms?: Room[];
}
export declare class BreadcrumbsStore extends AsyncStoreWithClient<IState> {
    private static internalInstance;
    private waitingRooms;
    private constructor();
    static get instance(): BreadcrumbsStore;
    get rooms(): Room[];
    get visible(): boolean;
    private get meetsRoomRequirement();
    protected onAction(payload: ActionPayload): Promise<void>;
    protected onReady(): Promise<void>;
    protected onNotReady(): Promise<void>;
    private onMyMembership;
    private onRoom;
    private updateRooms;
    private appendRoom;
}
export {};
