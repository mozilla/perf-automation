import { AsyncActionPayload } from "../dispatcher/payloads";
import { MatrixClient } from "matrix-js-sdk/src/client";
export default class GroupActions {
    /**
     * Creates an action thunk that will do an asynchronous request to fetch
     * the groups to which a user is joined.
     *
     * @param {MatrixClient} matrixClient the matrix client to query.
     * @returns {AsyncActionPayload} An async action payload.
     * @see asyncAction
     */
    static fetchJoinedGroups(matrixClient: MatrixClient): AsyncActionPayload;
}
