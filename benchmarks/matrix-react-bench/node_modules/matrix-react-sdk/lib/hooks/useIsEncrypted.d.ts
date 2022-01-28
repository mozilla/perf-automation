import { MatrixClient } from "matrix-js-sdk/src/client";
import { Room } from "matrix-js-sdk/src/models/room";
export declare function useIsEncrypted(cli: MatrixClient, room?: Room): boolean | undefined;
