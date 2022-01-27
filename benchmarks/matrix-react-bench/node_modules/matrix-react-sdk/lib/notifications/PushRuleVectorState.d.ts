import { IPushRule } from "matrix-js-sdk/src/@types/PushRules";
export declare enum VectorState {
    /** The push rule is disabled */
    Off = "off",
    /** The user will receive push notification for this rule */
    On = "on",
    /** The user will receive push notification for this rule with sound and
     highlight if this is legitimate */
    Loud = "loud"
}
export declare class PushRuleVectorState {
    static OFF: VectorState;
    static ON: VectorState;
    static LOUD: VectorState;
    /**
     * Enum for state of a push rule as defined by the Vector UI.
     * @readonly
     * @enum {string}
     */
    static states: typeof VectorState;
    /**
     * Convert a PushRuleVectorState to a list of actions
     *
     * @return [object] list of push-rule actions
     */
    static actionsFor(pushRuleVectorState: VectorState): import("matrix-js-sdk/src/@types/PushRules").PushRuleAction[];
    /**
     * Convert a pushrule's actions to a PushRuleVectorState.
     *
     * Determines whether a content rule is in the PushRuleVectorState.ON
     * category or in PushRuleVectorState.LOUD, regardless of its enabled
     * state. Returns null if it does not match these categories.
     */
    static contentRuleVectorStateKind(rule: IPushRule): VectorState;
}
