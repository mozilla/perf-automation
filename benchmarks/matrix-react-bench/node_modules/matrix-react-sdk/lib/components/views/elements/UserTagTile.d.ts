import React from "react";
interface IProps {
}
interface IState {
    selected: boolean;
}
export default class UserTagTile extends React.PureComponent<IProps, IState> {
    private tagStoreRef;
    constructor(props: IProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private onTagStoreUpdate;
    private onTileClick;
    render(): JSX.Element;
}
export {};
