import { IMediaEventContent } from '../customisations/models/IMediaEventContent';
/**
 * Extracts a human readable label for the file attachment to use as
 * link text.
 *
 * @param {IMediaEventContent} content The "content" key of the matrix event.
 * @param {string} fallbackText The fallback text
 * @param {boolean} withSize Whether to include size information. Default true.
 * @param {boolean} shortened Ensure the extension of the file name is visible. Default false.
 * @return {string} the human readable link text for the attachment.
 */
export declare function presentableTextForFile(content: IMediaEventContent, fallbackText?: string, withSize?: boolean, shortened?: boolean): string;
