import React from 'react';
interface IProps {
    connected: boolean;
    loading: boolean;
    url?: string;
    onFinished: () => void;
}
interface IState {
    errored: boolean;
}
export default class IntegrationManager extends React.Component<IProps, IState> {
    private dispatcherRef;
    static defaultProps: {
        connected: boolean;
        loading: boolean;
    };
    state: {
        errored: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    private onKeyDown;
    private onAction;
    private onError;
    render(): JSX.Element;
}
export {};
