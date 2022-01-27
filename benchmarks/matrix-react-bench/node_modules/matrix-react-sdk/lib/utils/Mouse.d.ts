/**
 * Different browsers use different deltaModes. This causes different behaviour.
 * To avoid that we use this function to convert any event to pixels.
 * @param {WheelEvent} event to normalize
 * @returns {WheelEvent} normalized event event
 */
export declare function normalizeWheelEvent(event: WheelEvent): WheelEvent;
