declare enum State {
    Online = "online",
    Offline = "offline",
    Unavailable = "unavailable"
}
declare class Presence {
    private unavailableTimer;
    private dispatcherRef;
    private state;
    /**
     * Start listening the user activity to evaluate his presence state.
     * Any state change will be sent to the homeserver.
     */
    start(): Promise<void>;
    /**
     * Stop tracking user activity
     */
    stop(): void;
    /**
     * Get the current presence state.
     * @returns {string} the presence state (see PRESENCE enum)
     */
    getState(): State;
    private onAction;
    /**
     * Set the presence state.
     * If the state has changed, the homeserver will be notified.
     * @param {string} newState the new presence state (see PRESENCE enum)
     */
    private setState;
}
declare const _default: Presence;
export default _default;
