import React from "react";
interface IProps {
    onClick?(): void;
}
interface IState {
}
export default class HostSignupAction extends React.PureComponent<IProps, IState> {
    private openDialog;
    render(): React.ReactNode;
}
export {};
