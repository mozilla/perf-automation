import { MatrixEvent } from "matrix-js-sdk/src/models/event";
import { MatrixClient } from "matrix-js-sdk/src/client";
/**
 * Determines if a read receipt update event includes the client's own user.
 * @param event The event to check.
 * @param client The client to check against.
 * @returns True if the read receipt update includes the client, false otherwise.
 */
export declare function readReceiptChangeIsFor(event: MatrixEvent, client: MatrixClient): boolean;
