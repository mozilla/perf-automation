import { Capability, Widget } from "matrix-widget-api";
/**
 * Approves the widget for capabilities that it requested, if any can be
 * approved. Typically this will be used to give certain widgets capabilities
 * without having to prompt the user to approve them. This cannot reject
 * capabilities that Element will be automatically granting, such as the
 * ability for Jitsi widgets to stay on screen - those will be approved
 * regardless.
 * @param {Widget} widget The widget to approve capabilities for.
 * @param {Set<Capability>} requestedCapabilities The capabilities the widget requested.
 * @returns {Set<Capability>} Resolves to the capabilities that are approved for use
 * by the widget. If none are approved, this should return an empty Set.
 */
declare function preapproveCapabilities(widget: Widget, requestedCapabilities: Set<Capability>): Promise<Set<Capability>>;
export interface IWidgetPermissionCustomisations {
    preapproveCapabilities?: typeof preapproveCapabilities;
}
export declare const WidgetPermissionCustomisations: IWidgetPermissionCustomisations;
export {};
