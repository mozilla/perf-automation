import * as React from 'react';
import { IDialogProps } from "./IDialogProps";
interface IProps extends IDialogProps {
}
export default class ServerOfflineDialog extends React.PureComponent<IProps> {
    componentDidMount(): void;
    componentWillUnmount(): void;
    private onEchosUpdated;
    private renderTimeline;
    render(): JSX.Element;
}
export {};
