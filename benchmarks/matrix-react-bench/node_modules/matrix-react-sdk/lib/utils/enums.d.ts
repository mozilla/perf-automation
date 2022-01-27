/**
 * Get the values for an enum.
 * @param e The enum.
 * @returns The enum values.
 */
export declare function getEnumValues(e: any): (string | number)[];
/**
 * Determines if a given value is a valid value for the provided enum.
 * @param e The enum to check against.
 * @param val The value to search for.
 * @returns True if the enum contains the value.
 */
export declare function isEnumValue<T>(e: T, val: string | number): boolean;
