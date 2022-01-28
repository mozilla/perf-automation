import { ListAlgorithm, SortAlgorithm } from "../models";
import { TagID } from "../../models";
import { OrderingAlgorithm } from "./OrderingAlgorithm";
/**
 * Gets an instance of the defined algorithm
 * @param {ListAlgorithm} algorithm The algorithm to get an instance of.
 * @param {TagID} tagId The tag the algorithm is for.
 * @param {SortAlgorithm} initSort The initial sorting algorithm for the ordering algorithm.
 * @returns {Algorithm} The algorithm instance.
 */
export declare function getListAlgorithmInstance(algorithm: ListAlgorithm, tagId: TagID, initSort: SortAlgorithm): OrderingAlgorithm;
