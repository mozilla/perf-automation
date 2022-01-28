/// <reference types="react" />
/**
 * formats numbers to fit into ~3 characters, suitable for badge counts
 * e.g: 999, 9.9K, 99K, 0.9M, 9.9M, 99M, 0.9B, 9.9B
 */
export declare function formatCount(count: number): string;
/**
 * Format a count showing the whole number but making it a bit more readable.
 * e.g: 1000 => 1,000
 */
export declare function formatCountLong(count: number): string;
/**
 * format a size in bytes into a human readable form
 * e.g: 1024 -> 1.00 KB
 */
export declare function formatBytes(bytes: number, decimals?: number): string;
/**
 * format a key into groups of 4 characters, for easier visual inspection
 *
 * @param {string} key key to format
 *
 * @return {string}
 */
export declare function formatCryptoKey(key: string): string;
/**
 * calculates a numeric hash for a given string
 *
 * @param {string} str string to hash
 *
 * @return {number}
 */
export declare function hashCode(str: string): number;
export declare function getUserNameColorClass(userId: string): string;
/**
 * Constructs a written English string representing `items`, with an optional
 * limit on the number of items included in the result. If specified and if the
 * length of `items` is greater than the limit, the string "and n others" will
 * be appended onto the result. If `items` is empty, returns the empty string.
 * If there is only one item, return it.
 * @param {string[]} items the items to construct a string from.
 * @param {number?} itemLimit the number by which to limit the list.
 * @returns {string} a string constructed by joining `items` with a comma
 * between each item, but with the last item appended as " and [lastItem]".
 */
export declare function formatCommaSeparatedList(items: string[], itemLimit?: number): string;
export declare function formatCommaSeparatedList(items: JSX.Element[], itemLimit?: number): JSX.Element;
export declare function formatCommaSeparatedList(items: Array<JSX.Element | string>, itemLimit?: number): JSX.Element | string;
