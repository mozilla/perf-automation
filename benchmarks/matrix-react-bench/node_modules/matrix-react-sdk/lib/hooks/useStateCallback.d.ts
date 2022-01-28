import { Dispatch, SetStateAction } from "react";
export declare const useStateCallback: <T>(initialValue: T, callback: (v: T) => void) => [T, Dispatch<SetStateAction<T>>];
