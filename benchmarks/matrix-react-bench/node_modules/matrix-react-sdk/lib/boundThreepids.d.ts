import { IThreepid, ThreepidMedium } from "matrix-js-sdk/src/@types/threepids";
import { MatrixClient } from "matrix-js-sdk/src/client";
export declare function getThreepidsWithBindStatus(client: MatrixClient, filterMedium?: ThreepidMedium): Promise<IThreepid[]>;
