import { IContent } from "matrix-js-sdk/src/models/event";
/**
 * Checks a message if it contains one of the provided emojis
 * @param  {Object} content The message
 * @param  {Array<string>} emojis The list of emojis to check for
 */
export declare const containsEmoji: (content: IContent, emojis: Array<string>) => boolean;
