export interface JitsiWidgetData {
    conferenceId: string;
    isAudioOnly: boolean;
    domain: string;
}
export declare class Jitsi {
    private static instance;
    private domain;
    get preferredDomain(): string;
    /**
     * Checks for auth needed by looking up a well-known file
     *
     * If the file does not exist, we assume no auth.
     *
     * See https://github.com/matrix-org/prosody-mod-auth-matrix-user-verification
     */
    getJitsiAuth(): Promise<string | null>;
    start(): void;
    private update;
    /**
     * Parses the given URL into the data needed for a Jitsi widget, if the widget
     * URL matches the preferredDomain for the app.
     * @param {string} url The URL to parse.
     * @returns {JitsiWidgetData} The widget data if eligible, otherwise null.
     */
    parsePreferredConferenceUrl(url: string): JitsiWidgetData;
    static getInstance(): Jitsi;
}
