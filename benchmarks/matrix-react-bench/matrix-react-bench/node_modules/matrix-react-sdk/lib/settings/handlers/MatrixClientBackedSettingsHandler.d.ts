import SettingsHandler from "./SettingsHandler";
import { MatrixClient } from "matrix-js-sdk/src/client";
/**
 * Represents the base class for settings handlers which need access to a MatrixClient.
 * This class performs no logic and should be overridden.
 */
export default abstract class MatrixClientBackedSettingsHandler extends SettingsHandler {
    private static _matrixClient;
    private static instances;
    static set matrixClient(client: MatrixClient);
    protected constructor();
    get client(): MatrixClient;
    protected initMatrixClient(oldClient: MatrixClient, newClient: MatrixClient): void;
}
