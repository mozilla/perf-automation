import zxcvbn from 'zxcvbn';
/**
 * Wrapper around zxcvbn password strength estimation
 * Include this only from async components: it pulls in zxcvbn
 * (obviously) which is large.
 *
 * @param {string} password Password to score
 * @returns {object} Score result with `score` and `feedback` properties
 */
export declare function scorePassword(password: string): zxcvbn.ZXCVBNResult;
