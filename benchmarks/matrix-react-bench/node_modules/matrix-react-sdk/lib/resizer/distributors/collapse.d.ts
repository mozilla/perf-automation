import FixedDistributor from "./fixed";
import ResizeItem from "../item";
import Resizer, { IConfig } from "../resizer";
import Sizer from "../sizer";
export interface ICollapseConfig extends IConfig {
    toggleSize: number;
    onCollapsed?(collapsed: boolean, id: string, element: HTMLElement): void;
    isItemCollapsed(element: HTMLElement): boolean;
}
declare class CollapseItem extends ResizeItem<ICollapseConfig> {
    notifyCollapsed(collapsed: boolean): void;
    get isCollapsed(): boolean;
}
export default class CollapseDistributor extends FixedDistributor<ICollapseConfig, CollapseItem> {
    static createItem(resizeHandle: HTMLDivElement, resizer: Resizer<ICollapseConfig>, sizer: Sizer, container?: HTMLElement): CollapseItem;
    private readonly toggleSize;
    private isCollapsed;
    constructor(item: CollapseItem);
    resize(newSize: number): void;
}
export {};
