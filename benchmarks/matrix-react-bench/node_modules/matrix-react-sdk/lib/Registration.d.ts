export declare const SAFE_LOCALPART_REGEX: RegExp;
/**
 * Starts either the ILAG or full registration flow, depending
 * on what the HS supports
 *
 * @param {object} options
 * @param {bool} options.go_home_on_cancel
 *     If true, goes to the home page if the user cancels the action
 * @param {bool} options.go_welcome_on_cancel
 *     If true, goes to the welcome page if the user cancels the action
 * @param {bool} options.screen_after
 *     If present the screen to redirect to after a successful login or register.
 */
export declare function startAnyRegistrationFlow(options: {
    go_home_on_cancel?: boolean;
    go_welcome_on_cancel?: boolean;
    screen_after?: boolean;
}): Promise<void>;
