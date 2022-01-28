import React from 'react';
import { IDialogProps } from "./IDialogProps";
interface IProps extends IDialogProps {
}
export default class IntegrationsDisabledDialog extends React.Component<IProps> {
    private onAcknowledgeClick;
    private onOpenSettingsClick;
    render(): JSX.Element;
}
export {};
