import { PushRuleAction } from "matrix-js-sdk/src/@types/PushRules";
interface IEncodedActions {
    notify: boolean;
    sound?: string;
    highlight?: boolean;
}
export declare class NotificationUtils {
    static encodeActions(action: IEncodedActions): PushRuleAction[];
    static decodeActions(actions: PushRuleAction[]): IEncodedActions;
}
export {};
