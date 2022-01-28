import React from "react";
import { ValidatedServerConfig } from "../../../utils/AutoDiscoveryUtils";
interface IProps {
    title?: string;
    serverConfig: ValidatedServerConfig;
    onFinished(config?: ValidatedServerConfig): void;
}
interface IState {
    defaultChosen: boolean;
    otherHomeserver: string;
}
export default class ServerPickerDialog extends React.PureComponent<IProps, IState> {
    private readonly defaultServer;
    private readonly fieldRef;
    private validatedConf;
    constructor(props: any);
    private onDefaultChosen;
    private onOtherChosen;
    private onHomeserverChange;
    private validate;
    private onHomeserverValidate;
    private onSubmit;
    render(): JSX.Element;
}
export {};
