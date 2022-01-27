import Timer from './utils/Timer';
/**
 * This class watches for user activity (moving the mouse or pressing a key)
 * and starts/stops attached timers while the user is active.
 *
 * There are two classes of 'active': 'active now' and 'active recently'
 * see doc on the userActive* functions for what these mean.
 */
export default class UserActivity {
    private readonly window;
    private readonly document;
    private readonly activeNowTimeout;
    private readonly activeRecentlyTimeout;
    private attachedActiveNowTimers;
    private attachedActiveRecentlyTimers;
    private lastScreenX;
    private lastScreenY;
    constructor(window: Window, document: Document);
    static sharedInstance(): UserActivity;
    /**
     * Runs the given timer while the user is 'active now', aborting when the user is no longer
     * considered currently active.
     * See userActiveNow() for what it means for a user to be 'active'.
     * Can be called multiple times with the same already running timer, which is a NO-OP.
     * Can be called before the user becomes active, in which case it is only started
     * later on when the user does become active.
     * @param {Timer} timer the timer to use
     */
    timeWhileActiveNow(timer: Timer): void;
    /**
     * Runs the given timer while the user is 'active' now or recently,
     * aborting when the user becomes inactive.
     * See userActiveRecently() for what it means for a user to be 'active recently'.
     * Can be called multiple times with the same already running timer, which is a NO-OP.
     * Can be called before the user becomes active, in which case it is only started
     * later on when the user does become active.
     * @param {Timer} timer the timer to use
     */
    timeWhileActiveRecently(timer: Timer): void;
    private timeWhile;
    /**
     * Start listening to user activity
     */
    start(): void;
    /**
     * Stop tracking user activity
     */
    stop(): void;
    /**
     * Return true if the user is currently 'active'
     * A user is 'active' while they are interacting with the app and for a very short (<1s)
     * time after that. This is intended to give a strong indication that the app has the
     * user's attention at any given moment.
     * @returns {boolean} true if user is currently 'active'
     */
    userActiveNow(): boolean;
    /**
     * Return true if the user is currently active or has been recently
     * A user is 'active recently' for a longer period of time (~2 mins) after
     * they have been 'active' and while the app still has the focus. This is
     * intended to indicate when the app may still have the user's attention
     * (or they may have gone to make tea and left the window focused).
     * @returns {boolean} true if user has been active recently
     */
    userActiveRecently(): boolean;
    private onPageVisibilityChanged;
    private onWindowBlurred;
    private onUserActivity;
    private static runTimersUntilTimeout;
}
