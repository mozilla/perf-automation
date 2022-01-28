declare type ObjectExcluding<O extends {}, P extends (keyof O)[]> = {
    [k in Exclude<keyof O, P[number]>]: O[k];
};
/**
 * Gets a new object which represents the provided object, excluding some properties.
 * @param a The object to strip properties of. Must be defined.
 * @param props The property names to remove.
 * @returns The new object without the provided properties.
 */
export declare function objectExcluding<O extends {}, P extends Array<keyof O>>(a: O, props: P): ObjectExcluding<O, P>;
/**
 * Gets a new object which represents the provided object, with only some properties
 * included.
 * @param a The object to clone properties of. Must be defined.
 * @param props The property names to keep.
 * @returns The new object with only the provided properties.
 */
export declare function objectWithOnly<O extends {}, P extends Array<keyof O>>(a: O, props: P): {
    [k in P[number]]: O[k];
};
/**
 * Clones an object to a caller-controlled depth. When a propertyCloner is supplied, the
 * object's properties will be passed through it with the return value used as the new
 * object's type. This is intended to be used to deep clone a reference, but without
 * having to deep clone the entire object. This function is safe to call recursively within
 * the propertyCloner.
 * @param a The object to clone. Must be defined.
 * @param propertyCloner The function to clone the properties of the object with, optionally.
 * First argument is the property key with the second being the current value.
 * @returns A cloned object.
 */
export declare function objectShallowClone<O extends {}>(a: O, propertyCloner?: (k: keyof O, v: O[keyof O]) => any): O;
/**
 * Determines if any keys were added, removed, or changed between two objects.
 * For changes, simple triple equal comparisons are done, not in-depth
 * tree checking.
 * @param a The first object. Must be defined.
 * @param b The second object. Must be defined.
 * @returns True if there's a difference between the objects, false otherwise
 */
export declare function objectHasDiff<O extends {}>(a: O, b: O): boolean;
declare type Diff<K> = {
    changed: K[];
    added: K[];
    removed: K[];
};
/**
 * Determines the keys added, changed, and removed between two objects.
 * For changes, simple triple equal comparisons are done, not in-depth
 * tree checking.
 * @param a The first object. Must be defined.
 * @param b The second object. Must be defined.
 * @returns The difference between the keys of each object.
 */
export declare function objectDiff<O extends {}>(a: O, b: O): Diff<keyof O>;
/**
 * Gets all the key changes (added, removed, or value difference) between
 * two objects. Triple equals is used to compare values, not in-depth tree
 * checking.
 * @param a The first object. Must be defined.
 * @param b The second object. Must be defined.
 * @returns The keys which have been added, removed, or changed between the
 * two objects.
 */
export declare function objectKeyChanges<O extends {}>(a: O, b: O): (keyof O)[];
/**
 * Clones an object by running it through JSON parsing. Note that this
 * will destroy any complicated object types which do not translate to
 * JSON.
 * @param obj The object to clone.
 * @returns The cloned object
 */
export declare function objectClone<O extends {}>(obj: O): O;
export {};
