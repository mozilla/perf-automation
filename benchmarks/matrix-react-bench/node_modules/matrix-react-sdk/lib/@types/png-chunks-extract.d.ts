/// <reference types="node" />
declare module "png-chunks-extract" {
    interface IChunk {
        name: string;
        data: Uint8Array;
    }
    function extractPngChunks(data: Uint8Array | Buffer): IChunk[];
    export default extractPngChunks;
}
