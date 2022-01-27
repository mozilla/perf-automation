import React from 'react';
import { IntegrationManagerInstance } from "../../../integrations/IntegrationManagerInstance";
interface IProps {
}
interface IState {
    currentManager: IntegrationManagerInstance;
    provisioningEnabled: boolean;
}
export default class SetIntegrationManager extends React.Component<IProps, IState> {
    constructor(props: IProps);
    private onProvisioningToggled;
    render(): React.ReactNode;
}
export {};
