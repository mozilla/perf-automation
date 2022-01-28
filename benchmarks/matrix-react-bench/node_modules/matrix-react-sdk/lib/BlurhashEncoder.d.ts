export declare class BlurhashEncoder {
    private static internalInstance;
    static get instance(): BlurhashEncoder;
    private readonly worker;
    private seq;
    private pendingDeferredMap;
    constructor();
    private onMessage;
    getBlurhash(imageData: ImageData): Promise<string>;
}
