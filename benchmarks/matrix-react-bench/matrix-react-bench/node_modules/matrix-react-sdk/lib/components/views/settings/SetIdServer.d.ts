import React from 'react';
interface IProps {
    missingTerms: boolean;
}
interface IState {
    defaultIdServer?: string;
    currentClientIdServer: string;
    idServer?: string;
    error?: string;
    busy: boolean;
    disconnectBusy: boolean;
    checking: boolean;
}
export default class SetIdServer extends React.Component<IProps, IState> {
    private dispatcherRef;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private onAction;
    private onIdentityServerChanged;
    private getTooltip;
    private idServerChangeEnabled;
    private saveIdServer;
    private checkIdServer;
    private showNoTermsWarning;
    private onDisconnectClicked;
    private showServerChangeWarning;
    private disconnectIdServer;
    render(): JSX.Element;
}
export {};
