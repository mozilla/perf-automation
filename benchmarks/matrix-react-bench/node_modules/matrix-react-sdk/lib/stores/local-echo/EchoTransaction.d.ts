import { Whenable } from "../../utils/Whenable";
export declare type RunFn = () => Promise<void>;
export declare enum TransactionStatus {
    Pending = 0,
    Success = 1,
    Error = 2
}
export declare class EchoTransaction extends Whenable<TransactionStatus> {
    readonly auditName: any;
    runFn: RunFn;
    private _status;
    private didFail;
    readonly startTime: Date;
    constructor(auditName: any, runFn: RunFn);
    get didPreviouslyFail(): boolean;
    get status(): TransactionStatus;
    run(): void;
    cancel(): void;
    private setStatus;
}
