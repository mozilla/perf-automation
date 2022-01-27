import React from "react";
interface IProps {
    reason: string;
    htmlReason?: string;
}
interface IState {
    hidden: boolean;
}
export default class InviteReason extends React.PureComponent<IProps, IState> {
    constructor(props: any);
    onViewClick: () => void;
    render(): JSX.Element;
}
export {};
