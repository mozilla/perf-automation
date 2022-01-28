import { RoomListStoreClass } from "./RoomListStore";
/**
 * Watches for changes in spaces to manage the filter on the provided RoomListStore
 */
export declare class SpaceWatcher {
    private store;
    private readonly filter;
    private activeSpace;
    private allRoomsInHome;
    constructor(store: RoomListStoreClass);
    private static needsFilter;
    private onSelectedSpaceUpdated;
    private onHomeBehaviourUpdated;
    private updateFilter;
}
