import FixedDistributor from "./distributors/fixed";
import ResizeItem from "./item";
import Sizer from "./sizer";
interface IClassNames {
    handle?: string;
    reverse?: string;
    vertical?: string;
    resizing?: string;
}
export interface IConfig {
    onResizeStart?(): void;
    onResizeStop?(): void;
    onResized?(size: number, id: string, element: HTMLElement): void;
    handler?: HTMLDivElement;
}
export default class Resizer<C extends IConfig = IConfig> {
    container: HTMLElement;
    private readonly distributorCtor;
    readonly config?: C;
    private classNames;
    constructor(container: HTMLElement, distributorCtor: {
        new (item: ResizeItem): FixedDistributor<C, any>;
        createItem(resizeHandle: HTMLDivElement, resizer: Resizer, sizer: Sizer, container: HTMLElement): ResizeItem;
        createSizer(containerElement: HTMLElement, vertical: boolean, reverse: boolean): Sizer;
    }, config?: C);
    setClassNames(classNames: IClassNames): void;
    attach(): void;
    detach(): void;
    /**
    Gives the distributor for a specific resize handle, as if you would have started
    to drag that handle. Can be used to manipulate the size of an item programmatically.
    @param {number} handleIndex the index of the resize handle in the container
    @return {FixedDistributor} a new distributor for the given handle
    */
    forHandleAt(handleIndex: number): FixedDistributor<C>;
    forHandleWithId(id: string): FixedDistributor<C>;
    isReverseResizeHandle(el: HTMLElement): boolean;
    isResizeHandle(el: HTMLElement): boolean;
    private onMouseDown;
    private onResize;
    getDistributors: () => FixedDistributor<any, ResizeItem<any>>[];
    private createSizerAndDistributor;
    private getResizeHandles;
}
export {};
