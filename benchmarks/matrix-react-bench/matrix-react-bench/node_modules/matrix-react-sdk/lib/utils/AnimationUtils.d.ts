/**
 * This method linearly interpolates between two points (start, end). This is
 * most commonly used to find a point some fraction of the way along a line
 * between two endpoints (e.g. to move an object gradually between those
 * points).
 * @param {number} start the starting point
 * @param {number} end the ending point
 * @param {number} amt the interpolant
 * @returns
 */
export declare function lerp(start: number, end: number, amt: number): number;
