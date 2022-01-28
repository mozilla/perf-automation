import { ReactNode } from 'react';
import { IContent } from "matrix-js-sdk/src/models/event";
/**
 * Renders a message with the changes made in an edit shown visually.
 * @param {object} originalContent the content for the base message
 * @param {object} editContent the content for the edit message
 * @return {object} a react element similar to what `bodyToHtml` returns
 */
export declare function editBodyDiffToHtml(originalContent: IContent, editContent: IContent): ReactNode;
