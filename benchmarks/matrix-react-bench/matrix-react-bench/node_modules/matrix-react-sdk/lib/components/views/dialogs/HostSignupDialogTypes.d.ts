export declare enum PostmessageAction {
    CloseDialog = "close_dialog",
    HostSignupAccountDetails = "host_signup_account_details",
    HostSignupAccountDetailsRequest = "host_signup_account_details_request",
    Minimize = "host_signup_minimize",
    Maximize = "host_signup_maximize",
    SetupComplete = "setup_complete"
}
interface IAccountData {
    accessToken: string;
    name: string;
    openIdToken: string;
    serverName: string;
    userLocalpart: string;
    termsAccepted: boolean;
}
export interface IPostmessageRequestData {
    action: PostmessageAction;
}
export interface IPostmessageResponseData {
    action: PostmessageAction;
    account?: IAccountData;
}
export interface IPostmessage {
    data: IPostmessageRequestData;
    origin: string;
}
export interface IHostSignupConfig {
    brand: string;
    cookiePolicyUrl: string;
    domains: Array<string>;
    privacyPolicyUrl: string;
    termsOfServiceUrl: string;
    url: string;
}
export {};
