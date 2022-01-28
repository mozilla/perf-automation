/// <reference types="node" />
import EventEmitter from "events";
import React from "react";
import { ComponentClass } from "../@types/common";
export interface IToast<C extends ComponentClass> {
    key: string;
    priority: number;
    title?: string;
    icon?: string;
    component: C;
    className?: string;
    bodyClassName?: string;
    props?: Omit<React.ComponentProps<C>, "toastKey">;
}
/**
 * Holds the active toasts
 */
export default class ToastStore extends EventEmitter {
    private toasts;
    private countSeen;
    static sharedInstance(): ToastStore;
    reset(): void;
    /**
     * Add or replace a toast
     * If a toast with the same toastKey already exists, the given toast will replace it
     * Toasts are always added underneath any toasts of the same priority, so existing
     * toasts stay at the top unless a higher priority one arrives (better to not change the
     * toast unless necessary).
     *
     * @param {object} newToast The new toast
     */
    addOrReplaceToast<C extends ComponentClass>(newToast: IToast<C>): void;
    dismissToast(key: any): void;
    getToasts(): IToast<any>[];
    getCountSeen(): number;
}
