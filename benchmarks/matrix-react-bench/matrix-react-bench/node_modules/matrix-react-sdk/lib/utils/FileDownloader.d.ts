export declare type getIframeFn = () => HTMLIFrameElement;
export declare const DEFAULT_STYLES: {
    imgSrc: string;
    imgStyle: any;
    style: string;
    textContent: string;
};
declare type DownloadOptions = {
    blob: Blob;
    name: string;
    autoDownload?: boolean;
    opts?: typeof DEFAULT_STYLES;
};
/**
 * Helper to handle safe file downloads. This operates off an iframe for reasons described
 * by the blob helpers. By default, this will use a hidden iframe to manage the download
 * through a user content wrapper, but can be given an iframe reference if the caller needs
 * additional control over the styling/position of the iframe itself.
 */
export declare class FileDownloader {
    private iframeFn;
    private onLoadPromise;
    /**
     * Creates a new file downloader
     * @param iframeFn Function to get a pre-configured iframe. Set to null to have the downloader
     * use a generic, hidden, iframe.
     */
    constructor(iframeFn?: getIframeFn);
    private get iframe();
    download({ blob, name, autoDownload, opts }: DownloadOptions): Promise<void>;
}
export {};
