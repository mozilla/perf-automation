import React from "react";
interface IProps {
}
interface IState {
    doAnimation: boolean;
    skipFirst: boolean;
}
export default class RoomBreadcrumbs extends React.PureComponent<IProps, IState> {
    private isMounted;
    constructor(props: IProps);
    componentWillUnmount(): void;
    private onBreadcrumbsUpdate;
    private viewRoom;
    render(): React.ReactElement;
}
export {};
