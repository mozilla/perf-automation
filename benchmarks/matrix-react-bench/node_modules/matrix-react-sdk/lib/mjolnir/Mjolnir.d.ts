import { BanList } from "./BanList";
export declare class Mjolnir {
    private static instance;
    private _lists;
    private _roomIds;
    private mjolnirWatchRef;
    private dispatcherRef;
    get roomIds(): string[];
    get lists(): BanList[];
    start(): void;
    private onAction;
    setup(): void;
    stop(): void;
    getOrCreatePersonalList(): Promise<BanList>;
    getPersonalList(): BanList;
    subscribeToList(roomId: string): Promise<void>;
    unsubscribeFromList(roomId: string): Promise<void>;
    private onEvent;
    private onListsChanged;
    private updateLists;
    isServerBanned(serverName: string): boolean;
    isUserBanned(userId: string): boolean;
    static sharedInstance(): Mjolnir;
}
