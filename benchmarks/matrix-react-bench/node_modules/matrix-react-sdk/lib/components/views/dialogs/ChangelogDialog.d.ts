import React from 'react';
interface IProps {
    newVersion: string;
    version: string;
    onFinished: (success: boolean) => void;
}
export default class ChangelogDialog extends React.Component<IProps> {
    constructor(props: any);
    componentDidMount(): void;
    private elementsForCommit;
    render(): JSX.Element;
}
export {};
