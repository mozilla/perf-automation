import { AsyncActionPayload } from "../dispatcher/payloads";
import { MatrixClient } from "matrix-js-sdk/src/client";
export default class TagOrderActions {
    /**
     * Creates an action thunk that will do an asynchronous request to
     * move a tag in GroupFilterOrderStore to destinationIx.
     *
     * @param {MatrixClient} matrixClient the matrix client to set the
     * account data on.
     * @param {string} tag the tag to move.
     * @param {number} destinationIx the new position of the tag.
     * @returns {AsyncActionPayload} an async action payload that will
     * dispatch actions indicating the status of the request.
     * @see asyncAction
     */
    static moveTag(matrixClient: MatrixClient, tag: string, destinationIx: number): AsyncActionPayload;
    /**
     * Creates an action thunk that will do an asynchronous request to
     * label a tag as removed in im.vector.web.tag_ordering account data.
     *
     * The reason this is implemented with new state `removedTags` is that
     * we incrementally and initially populate `tags` with groups that
     * have been joined. If we remove a group from `tags`, it will just
     * get added (as it looks like a group we've recently joined).
     *
     * NB: If we ever support adding of tags (which is planned), we should
     * take special care to remove the tag from `removedTags` when we add
     * it.
     *
     * @param {MatrixClient} matrixClient the matrix client to set the
     * account data on.
     * @param {string} tag the tag to remove.
     * @returns {function} an async action payload that will dispatch
     * actions indicating the status of the request.
     * @see asyncAction
     */
    static removeTag(matrixClient: MatrixClient, tag: string): AsyncActionPayload;
}
