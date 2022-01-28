/**
 * Utility class for lazily getting a variable.
 */
export declare class LazyValue<T> {
    private getFn;
    private val;
    private prom;
    private done;
    constructor(getFn: () => Promise<T>);
    /**
     * Whether or not a cached value is present.
     */
    get present(): boolean;
    /**
     * Gets the value without invoking a get. May be undefined until the
     * value is fetched properly.
     */
    get cachedValue(): T;
    /**
     * Gets a promise which resolves to the value, eventually.
     */
    get value(): Promise<T>;
}
