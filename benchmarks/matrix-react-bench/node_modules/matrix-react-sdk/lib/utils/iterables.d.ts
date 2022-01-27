export declare function iterableUnion<T>(a: Iterable<T>, b: Iterable<T>): Iterable<T>;
export declare function iterableDiff<T>(a: Iterable<T>, b: Iterable<T>): {
    added: Iterable<T>;
    removed: Iterable<T>;
};
