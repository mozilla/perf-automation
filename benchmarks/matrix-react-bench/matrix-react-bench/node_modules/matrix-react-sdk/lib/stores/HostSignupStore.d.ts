import { AsyncStore } from "./AsyncStore";
import { ActionPayload } from "../dispatcher/payloads";
interface IState {
    hostSignupActive?: boolean;
}
export declare class HostSignupStore extends AsyncStore<IState> {
    private static internalInstance;
    private constructor();
    static get instance(): HostSignupStore;
    get isHostSignupActive(): boolean;
    setHostSignupActive(status: boolean): Promise<void>;
    protected onDispatch(payload: ActionPayload): void;
}
export {};
