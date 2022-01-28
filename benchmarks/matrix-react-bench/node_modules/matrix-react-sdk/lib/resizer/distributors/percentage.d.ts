import Sizer from "../sizer";
import FixedDistributor from "./fixed";
import { IConfig } from "../resizer";
declare class PercentageSizer extends Sizer {
    start(item: HTMLElement): void;
    finish(item: HTMLElement): void;
}
export default class PercentageDistributor extends FixedDistributor<IConfig> {
    static createSizer(containerElement: HTMLElement, vertical: boolean, reverse: boolean): PercentageSizer;
}
export {};
