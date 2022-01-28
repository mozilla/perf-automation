import React from 'react';
interface IProps {
    onFinished: (success: boolean) => void;
}
interface IState {
    disabling: boolean;
}
export default class DisableEventIndexDialog extends React.Component<IProps, IState> {
    constructor(props: IProps);
    private onDisable;
    render(): React.ReactNode;
}
export {};
