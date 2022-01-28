export declare enum ExportFormat {
    Html = "Html",
    PlainText = "PlainText",
    Json = "Json"
}
export declare enum ExportType {
    Timeline = "Timeline",
    Beginning = "Beginning",
    LastNMessages = "LastNMessages"
}
export declare const textForFormat: (format: ExportFormat) => string;
export declare const textForType: (type: ExportType) => string;
export interface IExportOptions {
    numberOfMessages?: number;
    attachmentsIncluded: boolean;
    maxSize: number;
}
