/**
 * Decrypt a megolm key file
 *
 * @param {ArrayBuffer} data file to decrypt
 * @param {String} password
 * @return {Promise<String>} promise for decrypted output
 *
 *
 */
export declare function decryptMegolmKeyFile(data: ArrayBuffer, password: string): Promise<string>;
/**
 * Encrypt a megolm key file
 *
 * @param {String} data
 * @param {String} password
 * @param {Object=} options
 * @param {Number=} options.kdf_rounds Number of iterations to perform of the
 *    key-derivation function.
 * @return {Promise<ArrayBuffer>} promise for encrypted output
 */
export declare function encryptMegolmKeyFile(data: string, password: string, options?: {
    kdf_rounds?: number;
}): Promise<ArrayBuffer>;
