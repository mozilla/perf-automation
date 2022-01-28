/// <reference types="react" />
/**
 * Joins an array into one value with a joiner. E.g. join(["hello", "world"], " ") -> <span>hello world</span>
 * @param array the array of element to join
 * @param joiner the string/JSX.Element to join with
 * @returns the joined array
 */
export declare function jsxJoin(array: Array<string | JSX.Element>, joiner?: string | JSX.Element): JSX.Element;
