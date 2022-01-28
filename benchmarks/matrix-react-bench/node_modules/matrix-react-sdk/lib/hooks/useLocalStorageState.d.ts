import { Dispatch, SetStateAction } from "react";
export declare const useLocalStorageState: <T>(key: string, initialValue: T) => [T, Dispatch<SetStateAction<T>>];
