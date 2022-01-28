import React from 'react';
interface IProps {
    reason?: string;
    contentHtml: string;
}
interface IState {
    visible: boolean;
}
export default class Spoiler extends React.Component<IProps, IState> {
    constructor(props: IProps);
    private toggleVisible;
    render(): JSX.Element;
}
export {};
