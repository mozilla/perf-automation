export interface ScrollState {
    focussedEvent: string;
    pixelOffset: number;
}
/**
 * Stores where the user has scrolled to in each room
 */
export declare class RoomScrollStateStore {
    private scrollStateMap;
    getScrollState(roomId: string): ScrollState;
    setScrollState(roomId: string, scrollState: ScrollState): void;
}
declare const _default: RoomScrollStateStore;
export default _default;
