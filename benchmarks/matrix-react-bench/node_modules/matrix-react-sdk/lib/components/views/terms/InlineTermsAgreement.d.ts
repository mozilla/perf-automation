import React from "react";
interface IProps {
    policiesAndServicePairs: any[];
    onFinished: (string: any) => void;
    agreedUrls: string[];
    introElement: React.ReactNode;
}
interface IState {
    policies: Policy[];
    busy: boolean;
}
interface Policy {
    checked: boolean;
    url: string;
    name: string;
}
export default class InlineTermsAgreement extends React.Component<IProps, IState> {
    constructor(props: IProps);
    componentDidMount(): void;
    private togglePolicy;
    private onContinue;
    private renderCheckboxes;
    render(): React.ReactNode;
}
export {};
