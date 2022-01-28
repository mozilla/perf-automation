import React from 'react';
export interface IModal<T extends any[]> {
    elem: React.ReactNode;
    className?: string;
    beforeClosePromise?: Promise<boolean>;
    closeReason?: string;
    onBeforeClose?(reason?: string): Promise<boolean>;
    onFinished(...args: T): void;
    close(...args: T): void;
    hidden?: boolean;
}
export interface IHandle<T extends any[]> {
    finished: Promise<T>;
    close(...args: T): void;
}
declare type ParametersWithoutFirst<T extends (...args: any) => any> = T extends (a: any, ...args: infer P) => any ? P : never;
export declare class ModalManager {
    private counter;
    private priorityModal;
    private staticModal;
    private modals;
    private static getOrCreateContainer;
    private static getOrCreateStaticContainer;
    toggleCurrentDialogVisibility(): void;
    hasDialogs(): boolean | IModal<any>;
    createTrackedDialog<T extends any[]>(analyticsAction: string, analyticsInfo: string, ...rest: Parameters<ModalManager["createDialog"]>): IHandle<T>;
    appendTrackedDialog<T extends any[]>(analyticsAction: string, analyticsInfo: string, ...rest: Parameters<ModalManager["appendDialog"]>): IHandle<T>;
    createDialog<T extends any[]>(Element: React.ComponentType, ...rest: ParametersWithoutFirst<ModalManager["createDialogAsync"]>): IHandle<T>;
    appendDialog<T extends any[]>(Element: React.ComponentType, ...rest: ParametersWithoutFirst<ModalManager["appendDialogAsync"]>): IHandle<T>;
    createTrackedDialogAsync<T extends any[]>(analyticsAction: string, analyticsInfo: string, ...rest: Parameters<ModalManager["createDialogAsync"]>): IHandle<T>;
    appendTrackedDialogAsync<T extends any[]>(analyticsAction: string, analyticsInfo: string, ...rest: Parameters<ModalManager["appendDialogAsync"]>): IHandle<T>;
    closeCurrentModal(reason: string): void;
    private buildModal;
    private getCloseFn;
    /**
     * @callback onBeforeClose
     * @param {string?} reason either "backgroundClick" or null
     * @return {Promise<bool>} whether the dialog should close
     */
    /**
     * Open a modal view.
     *
     * This can be used to display a react component which is loaded as an asynchronous
     * webpack component. To do this, set 'loader' as:
     *
     *   (cb) => {
     *       require(['<module>'], cb);
     *   }
     *
     * @param {Promise} prom   a promise which resolves with a React component
     *   which will be displayed as the modal view.
     *
     * @param {Object} props   properties to pass to the displayed
     *    component. (We will also pass an 'onFinished' property.)
     *
     * @param {String} className   CSS class to apply to the modal wrapper
     *
     * @param {boolean} isPriorityModal if true, this modal will be displayed regardless
     *                                  of other modals that are currently in the stack.
     *                                  Also, when closed, all modals will be removed
     *                                  from the stack.
     * @param {boolean} isStaticModal  if true, this modal will be displayed under other
     *                                 modals in the stack. When closed, all modals will
     *                                 also be removed from the stack. This is not compatible
     *                                 with being a priority modal. Only one modal can be
     *                                 static at a time.
     * @param {Object} options? extra options for the dialog
     * @param {onBeforeClose} options.onBeforeClose a callback to decide whether to close the dialog
     * @returns {object} Object with 'close' parameter being a function that will close the dialog
     */
    private createDialogAsync;
    private appendDialogAsync;
    private onBackgroundClick;
    private getCurrentModal;
    private reRender;
}
declare const _default: ModalManager;
export default _default;
