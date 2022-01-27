import { TagID } from "./models";
export declare class ListLayout {
    readonly tagId: TagID;
    private _n;
    private _previews;
    private _collapsed;
    constructor(tagId: TagID);
    get isCollapsed(): boolean;
    set isCollapsed(v: boolean);
    get showPreviews(): boolean;
    set showPreviews(v: boolean);
    get tileHeight(): number;
    private get key();
    get visibleTiles(): number;
    set visibleTiles(v: number);
    get minVisibleTiles(): number;
    get defaultVisibleTiles(): number;
    tilesWithPadding(n: number, paddingPx: number): number;
    tilesToPixelsWithPadding(n: number, paddingPx: number): number;
    tilesToPixels(n: number): number;
    pixelsToTiles(px: number): number;
    reset(): void;
    private save;
    private serialize;
}
