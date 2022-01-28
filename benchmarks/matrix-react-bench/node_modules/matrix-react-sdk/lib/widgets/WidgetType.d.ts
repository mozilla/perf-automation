export declare class WidgetType {
    readonly preferred: string;
    readonly legacy: string;
    static readonly JITSI: WidgetType;
    static readonly STICKERPICKER: WidgetType;
    static readonly INTEGRATION_MANAGER: WidgetType;
    static readonly CUSTOM: WidgetType;
    constructor(preferred: string, legacy: string);
    matches(type: string): boolean;
    static fromString(type: string): WidgetType;
}
