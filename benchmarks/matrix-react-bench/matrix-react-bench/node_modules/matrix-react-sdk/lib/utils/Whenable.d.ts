import { IDestroyable } from "./IDestroyable";
export declare type WhenFn<T> = (w: Whenable<T>) => void;
/**
 * Whenables are a cheap way to have Observable patterns mixed with typical
 * usage of Promises, without having to tear down listeners or calls. Whenables
 * are intended to be used when a condition will be met multiple times and
 * the consumer needs to know *when* that happens.
 */
export declare abstract class Whenable<T> implements IDestroyable {
    private listeners;
    /**
     * Sets up a call to `fn` *when* the `condition` is met.
     * @param condition The condition to match.
     * @param fn The function to call.
     * @returns This.
     */
    when(condition: T, fn: WhenFn<T>): Whenable<T>;
    /**
     * Sets up a call to `fn` *when* any of the `conditions` are met.
     * @param conditions The conditions to match.
     * @param fn The function to call.
     * @returns This.
     */
    whenAnyOf(conditions: T[], fn: WhenFn<T>): Whenable<T>;
    /**
     * Sets up a call to `fn` *when* any condition is met.
     * @param fn The function to call.
     * @returns This.
     */
    whenAnything(fn: WhenFn<T>): Whenable<T>;
    /**
     * Notifies all the listeners of a given condition.
     * @param condition The new condition that has been met.
     */
    protected notifyCondition(condition: T): void;
    destroy(): void;
}
