/**
 * An array which is of fixed length and accepts rolling values. Values will
 * be inserted on the left, falling off the right.
 */
export declare class FixedRollingArray<T> {
    private width;
    private samples;
    /**
     * Creates a new fixed rolling array.
     * @param width The width of the array.
     * @param padValue The value to seed the array with.
     */
    constructor(width: number, padValue: T);
    /**
     * The array, as a fixed length.
     */
    get value(): T[];
    /**
     * Pushes a value to the array.
     * @param value The value to push.
     */
    pushValue(value: T): void;
}
