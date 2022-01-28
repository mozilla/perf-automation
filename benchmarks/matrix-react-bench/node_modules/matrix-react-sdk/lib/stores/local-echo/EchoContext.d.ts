import { EchoTransaction, RunFn } from "./EchoTransaction";
import { IDestroyable } from "../../utils/IDestroyable";
import { Whenable } from "../../utils/Whenable";
export declare enum ContextTransactionState {
    NotStarted = 0,
    PendingErrors = 1,
    AllSuccessful = 2
}
export declare abstract class EchoContext extends Whenable<ContextTransactionState> implements IDestroyable {
    private _transactions;
    private _state;
    get transactions(): EchoTransaction[];
    get state(): ContextTransactionState;
    get firstFailedTime(): Date;
    disownTransaction(txn: EchoTransaction): void;
    beginTransaction(auditName: string, runFn: RunFn): EchoTransaction;
    private checkTransactions;
    destroy(): void;
}
