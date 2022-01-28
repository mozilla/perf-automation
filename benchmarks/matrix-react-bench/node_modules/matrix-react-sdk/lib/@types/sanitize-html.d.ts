import sanitizeHtml from 'sanitize-html';
export interface IExtendedSanitizeOptions extends sanitizeHtml.IOptions {
    nestingLimit?: number;
}
