import { ITemplateParams } from "matrix-widget-api";
/**
 * Provides a partial set of the variables needed to render any widget. If
 * variables are missing or not provided then they will be filled with the
 * application-determined defaults.
 *
 * This will not be called until after isReady() resolves.
 * @returns {Partial<Omit<ITemplateParams, "widgetRoomId">>} The variables.
 */
declare function provideVariables(): Partial<Omit<ITemplateParams, "widgetRoomId">>;
/**
 * Resolves to whether or not the customisation point is ready for variables
 * to be provided. This will block widgets being rendered.
 * @returns {Promise<boolean>} Resolves when ready.
 */
declare function isReady(): Promise<void>;
export interface IWidgetVariablesCustomisations {
    provideVariables?: typeof provideVariables;
    isReady?: typeof isReady;
}
export declare const WidgetVariableCustomisations: IWidgetVariablesCustomisations;
export {};
