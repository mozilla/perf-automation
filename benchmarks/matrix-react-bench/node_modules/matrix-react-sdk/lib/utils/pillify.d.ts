import { MatrixEvent } from "matrix-js-sdk/src/models/event";
/**
 * Recurses depth-first through a DOM tree, converting matrix.to links
 * into pills based on the context of a given room.  Returns a list of
 * the resulting React nodes so they can be unmounted rather than leaking.
 *
 * @param {Element[]} nodes - a list of sibling DOM nodes to traverse to try
 *   to turn into pills.
 * @param {MatrixEvent} mxEvent - the matrix event which the DOM nodes are
 *   part of representing.
 * @param {Element[]} pills: an accumulator of the DOM nodes which contain
 *   React components which have been mounted as part of this.
 *   The initial caller should pass in an empty array to seed the accumulator.
 */
export declare function pillifyLinks(nodes: ArrayLike<Element>, mxEvent: MatrixEvent, pills: Element[]): void;
/**
 * Unmount all the pill containers from React created by pillifyLinks.
 *
 * It's critical to call this after pillifyLinks, otherwise
 * Pills will leak, leaking entire DOM trees via the event
 * emitter on BaseAvatar as per
 * https://github.com/vector-im/element-web/issues/12417
 *
 * @param {Element[]} pills - array of pill containers whose React
 *   components should be unmounted.
 */
export declare function unmountPills(pills: Element[]): void;
