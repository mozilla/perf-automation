export declare function timeout<T, Y>(promise: Promise<T>, timeoutValue: Y, ms: number): Promise<T | Y>;
export declare function retry<T, E extends Error>(fn: () => Promise<T>, num: number, predicate?: (e: E) => boolean): Promise<T>;
