import { TagID } from "../models";
import { Room } from "matrix-js-sdk/src/models/room";
import { OrderingAlgorithm } from "./list-ordering/OrderingAlgorithm";
export declare enum SortAlgorithm {
    Manual = "MANUAL",
    Alphabetic = "ALPHABETIC",
    Recent = "RECENT"
}
export declare enum ListAlgorithm {
    Importance = "IMPORTANCE",
    Natural = "NATURAL"
}
export interface ITagSortingMap {
    [tagId: TagID]: SortAlgorithm;
}
export interface IListOrderingMap {
    [tagId: TagID]: ListAlgorithm;
}
export interface IOrderingAlgorithmMap {
    [tagId: TagID]: OrderingAlgorithm;
}
export interface ITagMap {
    [tagId: TagID]: Room[];
}
