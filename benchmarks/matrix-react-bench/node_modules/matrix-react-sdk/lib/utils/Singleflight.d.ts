/**
 * Access class to get a singleflight context. Singleflights execute a
 * function exactly once, unless instructed to forget about a result.
 *
 * Typically this is used to de-duplicate an action, such as a save button
 * being pressed, without having to track state internally for an operation
 * already being in progress. This doesn't expose a flag which can be used
 * to disable a button, however it would be capable of returning a Promise
 * from the first call.
 *
 * The result of the function call is cached indefinitely, just in case a
 * second call comes through late. There are various functions named "forget"
 * to have the cache be cleared of a result.
 *
 * Singleflights in our usecase are tied to an instance of something, combined
 * with a string key to differentiate between multiple possible actions. This
 * means that a "save" key will be scoped to the instance which defined it and
 * not leak between other instances. This is done to avoid having to concatenate
 * variables to strings to essentially namespace the field, for most cases.
 */
export declare class Singleflight {
    private constructor();
    /**
     * A void marker to help with returning a value in a singleflight context.
     * If your code doesn't return anything, return this instead.
     */
    static Void: symbol;
    /**
     * Acquire a singleflight context.
     * @param {Object} instance An instance to associate the context with. Can be any object.
     * @param {string} key A string key relevant to that instance to namespace under.
     * @returns {SingleflightContext} Returns the context to execute the function.
     */
    static for(instance: Object, key: string): SingleflightContext;
    /**
     * Forgets all results for a given instance.
     * @param {Object} instance The instance to forget about.
     */
    static forgetAllFor(instance: Object): void;
    /**
     * Forgets all cached results for all instances. Intended for use by tests.
     */
    static forgetAll(): void;
}
declare class SingleflightContext {
    private instance;
    private key;
    constructor(instance: Object, key: string);
    /**
     * Forget this particular instance and key combination, discarding the result.
     */
    forget(): void;
    /**
     * Execute a function. If a result is already known, that will be returned instead
     * of executing the provided function. However, if no result is known then the function
     * will be called, with its return value cached. The function must return a value
     * other than `undefined` - take a look at Singleflight.Void if you don't have a return
     * to make.
     *
     * Note that this technically allows the caller to provide a different function each time:
     * this is largely considered a bad idea and should not be done. Singleflights work off the
     * premise that something needs to happen once, so duplicate executions will be ignored.
     *
     * For ideal performance and behaviour, functions which return promises are preferred. If
     * a function is not returning a promise, it should return as soon as possible to avoid a
     * second call potentially racing it. The promise returned by this function will be that
     * of the first execution of the function, even on duplicate calls.
     * @param {Function} fn The function to execute.
     * @returns The recorded value.
     */
    do<T>(fn: () => T): T;
}
export {};
