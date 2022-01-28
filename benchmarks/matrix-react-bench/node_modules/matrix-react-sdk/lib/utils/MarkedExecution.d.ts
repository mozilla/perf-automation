/**
 * A utility to ensure that a function is only called once triggered with
 * a mark applied. Multiple marks can be applied to the function, however
 * the function will only be called once upon trigger().
 *
 * The function starts unmarked.
 */
export declare class MarkedExecution {
    private fn;
    private onMarkCallback?;
    private marked;
    /**
     * Creates a MarkedExecution for the provided function.
     * @param {Function} fn The function to be called upon trigger if marked.
     * @param {Function} onMarkCallback A function that is called when a new mark is made. Not
     * called if a mark is already flagged.
     */
    constructor(fn: () => void, onMarkCallback?: () => void);
    /**
     * Resets the mark without calling the function.
     */
    reset(): void;
    /**
     * Marks the function to be called upon trigger().
     */
    mark(): void;
    /**
     * If marked, the function will be called, otherwise this does nothing.
     */
    trigger(): void;
}
