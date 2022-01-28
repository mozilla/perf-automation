/// <reference types="node" />
/**
 * Fires when the middle panel has been resized (throttled).
 * @event module:utils~ResizeNotifier#"middlePanelResized"
 */
/**
 * Fires when the middle panel has been resized by a pixel.
 * @event module:utils~ResizeNotifier#"middlePanelResizedNoisy"
 */
import { EventEmitter } from "events";
export default class ResizeNotifier extends EventEmitter {
    private _isResizing;
    private throttledMiddlePanel;
    get isResizing(): boolean;
    startResizing(): void;
    stopResizing(): void;
    private noisyMiddlePanel;
    private updateMiddlePanel;
    notifyLeftHandleResized(): void;
    notifyRightHandleResized(): void;
    notifyTimelineHeightChanged(): void;
    notifyWindowResized(): void;
}
