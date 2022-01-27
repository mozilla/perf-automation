import { UIComponent } from "../settings/UIFeature";
/**
 * Determines whether or not the active MatrixClient user should be able to use
 * the given UI component. If shown, the user might still not be able to use the
 * component depending on their contextual permissions. For example, invite options
 * might be shown to the user but they won't have permission to invite users to
 * the current room: the button will appear disabled.
 * @param {UIComponent} component The component to check visibility for.
 * @returns {boolean} True (default) if the user is able to see the component, false
 * otherwise.
 */
declare function shouldShowComponent(component: UIComponent): boolean;
export interface IComponentVisibilityCustomisations {
    shouldShowComponent?: typeof shouldShowComponent;
}
export declare const ComponentVisibilityCustomisations: IComponentVisibilityCustomisations;
export {};
