import { ActionPayload } from "../dispatcher/payloads";
import { AsyncStoreWithClient } from "./AsyncStoreWithClient";
interface IState {
    displayName?: string;
    avatarUrl?: string;
}
export declare class OwnProfileStore extends AsyncStoreWithClient<IState> {
    private static internalInstance;
    private monitoredUser;
    private constructor();
    static get instance(): OwnProfileStore;
    /**
     * Gets the display name for the user, or null if not present.
     */
    get displayName(): string;
    /**
     * Gets the MXC URI of the user's avatar, or null if not present.
     */
    get avatarMxc(): string;
    /**
     * Gets the user's avatar as an HTTP URL of the given size. If the user's
     * avatar is not present, this returns null.
     * @param size The size of the avatar. If zero, a full res copy of the avatar
     * will be returned as an HTTP URL.
     * @returns The HTTP URL of the user's avatar
     */
    getHttpAvatarUrl(size?: number): string;
    protected onNotReady(): Promise<void>;
    protected onReady(): Promise<void>;
    protected onAction(payload: ActionPayload): Promise<void>;
    private onProfileUpdate;
    private onStateEvents;
}
export {};
