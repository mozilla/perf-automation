import React from 'react';
interface ITermsDialogProps {
    /**
     * Array of [Service, policies] pairs, where policies is the response from the
     * /terms endpoint for that service
     */
    policiesAndServicePairs: any[];
    /**
     * urls that the user has already agreed to
     */
    agreedUrls?: string[];
    /**
     * Called with:
     *     * success {bool} True if the user accepted any douments, false if cancelled
     *     * agreedUrls {string[]} List of agreed URLs
     */
    onFinished: (success: boolean, agreedUrls?: string[]) => void;
}
interface IState {
    agreedUrls: any;
}
export default class TermsDialog extends React.PureComponent<ITermsDialogProps, IState> {
    constructor(props: any);
    private onCancelClick;
    private onNextClick;
    private nameForServiceType;
    private summaryForServiceType;
    private onTermsCheckboxChange;
    render(): JSX.Element;
}
export {};
