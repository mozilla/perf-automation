import React from "react";
declare type Data = Pick<IFieldState, "value" | "allowEmpty">;
interface IResult {
    key: string;
    valid: boolean;
    text: string;
}
interface IRule<T, D = void> {
    key: string;
    final?: boolean;
    skip?(this: T, data: Data, derivedData: D): boolean;
    test(this: T, data: Data, derivedData: D): boolean | Promise<boolean>;
    valid?(this: T, derivedData: D): string;
    invalid?(this: T, derivedData: D): string;
}
interface IArgs<T, D = void> {
    rules: IRule<T, D>[];
    description?(this: T, derivedData: D, results: IResult[]): React.ReactChild;
    hideDescriptionIfValid?: boolean;
    deriveData?(data: Data): Promise<D>;
}
export interface IFieldState {
    value: string;
    focused: boolean;
    allowEmpty: boolean;
}
export interface IValidationResult {
    valid?: boolean;
    feedback?: React.ReactChild;
}
/**
 * Creates a validation function from a set of rules describing what to validate.
 * Generic T is the "this" type passed to the rule methods
 *
 * @param {Function} description
 *     Function that returns a string summary of the kind of value that will
 *     meet the validation rules. Shown at the top of the validation feedback.
 * @param {Boolean} hideDescriptionIfValid
 *     If true, don't show the description if the validation passes validation.
 * @param {Function} deriveData
 *     Optional function that returns a Promise to an object of generic type D.
 *     The result of this Promise is passed to rule methods `skip`, `test`, `valid`, and `invalid`.
 *     Useful for doing calculations per-value update once rather than in each of the above rule methods.
 * @param {Object} rules
 *     An array of rules describing how to check to input value. Each rule in an object
 *     and may have the following properties:
 *     - `key`: A unique ID for the rule. Required.
 *     - `skip`: A function used to determine whether the rule should even be evaluated.
 *     - `test`: A function used to determine the rule's current validity. Required.
 *     - `valid`: Function returning text to show when the rule is valid. Only shown if set.
 *     - `invalid`: Function returning text to show when the rule is invalid. Only shown if set.
 *     - `final`: A Boolean if true states that this rule will only be considered if all rules before it returned valid.
 * @returns {Function}
 *     A validation function that takes in the current input value and returns
 *     the overall validity and a feedback UI that can be rendered for more detail.
 */
export default function withValidation<T = undefined, D = void>({ description, hideDescriptionIfValid, deriveData, rules, }: IArgs<T, D>): ({ value, focused, allowEmpty }: IFieldState) => Promise<IValidationResult>;
export {};
