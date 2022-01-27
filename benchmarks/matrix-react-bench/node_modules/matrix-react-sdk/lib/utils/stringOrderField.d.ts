export declare function midPointsBetweenStrings(a: string, b: string, count: number, maxLen: number, alphabet?: string): string[];
interface IEntry {
    index: number;
    order: string;
}
export declare const reorderLexicographically: (orders: Array<string | undefined>, fromIndex: number, toIndex: number, maxLen?: number) => IEntry[];
export {};
