import ResizeItem from "../item";
import Sizer from "../sizer";
import Resizer, { IConfig } from "../resizer";
/**
distributors translate a moving cursor into
CSS/DOM changes by calling the sizer

they have two methods:
    `resize` receives then new item size
    `resizeFromContainerOffset` receives resize handle location
        within the container bounding box. For internal use.
        This method usually ends up calling `resize` once the start offset is subtracted.
*/
export default class FixedDistributor<C extends IConfig, I extends ResizeItem<any> = ResizeItem<C>> {
    readonly item: I;
    static createItem(resizeHandle: HTMLDivElement, resizer: Resizer, sizer: Sizer): ResizeItem;
    static createSizer(containerElement: HTMLElement, vertical: boolean, reverse: boolean): Sizer;
    private readonly beforeOffset;
    constructor(item: I);
    get size(): string;
    set size(size: string);
    resize(size: number): void;
    resizeFromContainerOffset(offset: number): void;
    start(): void;
    finish(): void;
}
