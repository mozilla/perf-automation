import { ISearchResult, ISearchResults } from "matrix-js-sdk/src/@types/search";
import { ISearchArgs } from "./indexing/BaseEventIndexManager";
export interface ISeshatSearchResults extends ISearchResults {
    seshatQuery?: ISearchArgs;
    cachedEvents?: ISearchResult[];
    oldestEventFrom?: "local" | "server";
    serverSideNextBatch?: string;
}
export declare function searchPagination(searchResult: ISearchResults): Promise<ISearchResults>;
export default function eventSearch(term: string, roomId?: string): Promise<ISearchResults>;
