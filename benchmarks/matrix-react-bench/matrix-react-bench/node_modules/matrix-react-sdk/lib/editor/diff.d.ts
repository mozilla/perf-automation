export interface IDiff {
    removed?: string;
    added?: string;
    at?: number;
}
export declare function diffDeletion(oldStr: string, newStr: string): IDiff;
/**
 * Calculates which string was added and removed around the caret position
 * @param {String} oldValue the previous value
 * @param {String} newValue the new value
 * @param {Number} caretPosition the position of the caret after `newValue` was applied.
 * @return {object} an object with `at` as the offset where characters were removed and/or added,
 *                  `added` with the added string (if any), and
 *                  `removed` with the removed string (if any)
 */
export declare function diffAtCaret(oldValue: string, newValue: string, caretPosition: number): IDiff;
