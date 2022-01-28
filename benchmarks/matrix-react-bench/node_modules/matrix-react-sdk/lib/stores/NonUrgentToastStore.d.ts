/// <reference types="node" />
import EventEmitter from "events";
import { ComponentClass } from "../@types/common";
export declare type ToastReference = symbol;
export default class NonUrgentToastStore extends EventEmitter {
    private static _instance;
    private toasts;
    static get instance(): NonUrgentToastStore;
    get components(): ComponentClass[];
    addToast(c: ComponentClass): ToastReference;
    removeToast(ref: ToastReference): void;
}
