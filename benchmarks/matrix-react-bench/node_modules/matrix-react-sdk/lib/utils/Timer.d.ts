/**
A countdown timer, exposing a promise api.
A timer starts in a non-started state,
and needs to be started by calling `start()`` on it first.

Timers can be `abort()`-ed which makes the promise reject prematurely.

Once a timer is finished or aborted, it can't be started again
(because the promise should not be replaced). Instead, create
a new one through `clone()` or `cloneIfRun()`.
*/
export default class Timer {
    private timeout;
    private timerHandle;
    private startTs;
    private promise;
    private resolve;
    private reject;
    constructor(timeout: number);
    private setNotStarted;
    private onTimeout;
    changeTimeout(timeout: number): void;
    /**
     * if not started before, starts the timer.
     * @returns {Timer} the same timer
     */
    start(): this;
    /**
     * (re)start the timer. If it's running, reset the timeout. If not, start it.
     * @returns {Timer} the same timer
     */
    restart(): this;
    /**
     * if the timer is running, abort it,
     * and reject the promise for this timer.
     * @returns {Timer} the same timer
     */
    abort(): this;
    /**
     *promise that will resolve when the timer elapses,
     *or is rejected when abort is called
     *@return {Promise}
     */
    finished(): Promise<void>;
    isRunning(): boolean;
}
