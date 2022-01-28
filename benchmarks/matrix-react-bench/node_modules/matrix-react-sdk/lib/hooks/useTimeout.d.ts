declare type Handler = () => void;
export declare const useTimeout: (handler: Handler, timeoutMs: number) => void;
export declare const useInterval: (handler: Handler, intervalMs: number) => void;
export declare const useExpiringCounter: (handler: Handler, intervalMs: number, initialCount: number) => number;
export {};
