import { Capability, WidgetKind } from "matrix-widget-api";
import { TranslatedString } from "../languageHandler";
export interface TranslatedCapabilityText {
    primary: TranslatedString;
    byline?: TranslatedString;
}
export declare class CapabilityText {
    private static simpleCaps;
    private static stateSendRecvCaps;
    private static nonStateSendRecvCaps;
    private static bylineFor;
    static for(capability: Capability, kind: WidgetKind): TranslatedCapabilityText;
    private static forRoomMessageCap;
}
