/**
 * Tracks typing state for users.
 */
export default class TypingStore {
    private typingStates;
    constructor();
    static sharedInstance(): TypingStore;
    /**
     * Clears all cached typing states. Intended to be called when the
     * MatrixClientPeg client changes.
     */
    reset(): void;
    /**
     * Changes the typing status for the MatrixClientPeg user.
     * @param {string} roomId The room ID to set the typing state in.
     * @param {boolean} isTyping Whether the user is typing or not.
     */
    setSelfTyping(roomId: string, threadId: string | null, isTyping: boolean): void;
}
