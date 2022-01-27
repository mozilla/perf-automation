import { DependencyList } from 'react';
declare type Fn<T> = () => Promise<T>;
export declare const useAsyncMemo: <T>(fn: Fn<T>, deps: DependencyList, initialValue?: T) => T;
export {};
