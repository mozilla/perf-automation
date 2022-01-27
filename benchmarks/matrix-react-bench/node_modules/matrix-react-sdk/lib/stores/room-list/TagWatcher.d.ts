import { RoomListStoreClass } from "./RoomListStore";
/**
 * Watches for changes in groups to manage filters on the provided RoomListStore
 */
export declare class TagWatcher {
    private store;
    private filters;
    constructor(store: RoomListStoreClass);
    private onTagsUpdated;
}
