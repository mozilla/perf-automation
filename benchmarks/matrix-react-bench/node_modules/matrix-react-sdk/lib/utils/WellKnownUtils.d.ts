export interface ICallBehaviourWellKnown {
    widget_build_url?: string;
}
export interface IE2EEWellKnown {
    default?: boolean;
    secure_backup_required?: boolean;
    secure_backup_setup_methods?: SecureBackupSetupMethod[];
}
export declare function getCallBehaviourWellKnown(): ICallBehaviourWellKnown;
export declare function getE2EEWellKnown(): IE2EEWellKnown;
export declare function isSecureBackupRequired(): boolean;
export declare enum SecureBackupSetupMethod {
    Key = "key",
    Passphrase = "passphrase"
}
export declare function getSecureBackupSetupMethods(): SecureBackupSetupMethod[];
