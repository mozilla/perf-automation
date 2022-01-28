/**
 * Represents a common Matrix glob. This is commonly used
 * for server ACLs and similar functions.
 */
export declare class MatrixGlob {
    _regex: RegExp;
    /**
     * Creates a new Matrix Glob
     * @param {string} glob The glob to convert. Eg: "*.example.org"
     */
    constructor(glob: string);
    /**
     * Tests the glob against a value, returning true if it matches.
     * @param {string} val The value to test.
     * @returns {boolean} True if the value matches the glob, false otherwise.
     */
    test(val: string): boolean;
}
