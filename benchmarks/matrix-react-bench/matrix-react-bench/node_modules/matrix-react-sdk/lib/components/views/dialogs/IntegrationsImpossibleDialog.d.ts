import React from 'react';
import { IDialogProps } from "./IDialogProps";
interface IProps extends IDialogProps {
}
export default class IntegrationsImpossibleDialog extends React.Component<IProps> {
    private onAcknowledgeClick;
    render(): JSX.Element;
}
export {};
