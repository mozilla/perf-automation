import { TagID } from "./models";
import { ListLayout } from "./ListLayout";
import { AsyncStoreWithClient } from "../AsyncStoreWithClient";
import { ActionPayload } from "../../dispatcher/payloads";
interface IState {
}
export default class RoomListLayoutStore extends AsyncStoreWithClient<IState> {
    private static internalInstance;
    private readonly layoutMap;
    constructor();
    static get instance(): RoomListLayoutStore;
    ensureLayoutExists(tagId: TagID): void;
    getLayoutFor(tagId: TagID): ListLayout;
    resetLayouts(): Promise<void>;
    protected onNotReady(): Promise<any>;
    protected onAction(payload: ActionPayload): Promise<any>;
}
export {};
