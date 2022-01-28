export declare enum Kind {
    SET_UP_ENCRYPTION = "set_up_encryption",
    UPGRADE_ENCRYPTION = "upgrade_encryption",
    VERIFY_THIS_SESSION = "verify_this_session"
}
export declare const showToast: (kind: Kind) => void;
export declare const hideToast: () => void;
