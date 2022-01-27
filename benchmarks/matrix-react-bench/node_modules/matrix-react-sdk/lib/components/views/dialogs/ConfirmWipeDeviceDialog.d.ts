import React from 'react';
interface IProps {
    onFinished: (success: boolean) => void;
}
export default class ConfirmWipeDeviceDialog extends React.Component<IProps> {
    private onConfirm;
    private onDecline;
    render(): JSX.Element;
}
export {};
