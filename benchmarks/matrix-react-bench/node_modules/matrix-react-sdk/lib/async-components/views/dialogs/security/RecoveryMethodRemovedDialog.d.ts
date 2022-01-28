import React from "react";
import { IDialogProps } from "../../../../components/views/dialogs/IDialogProps";
interface IProps extends IDialogProps {
}
export default class RecoveryMethodRemovedDialog extends React.PureComponent<IProps> {
    private onGoToSettingsClick;
    private onSetupClick;
    render(): JSX.Element;
}
export {};
