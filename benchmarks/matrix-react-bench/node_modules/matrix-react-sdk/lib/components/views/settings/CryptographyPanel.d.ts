import React from 'react';
interface IProps {
}
interface IState {
}
export default class CryptographyPanel extends React.Component<IProps, IState> {
    constructor(props: IProps);
    render(): JSX.Element;
    private onExportE2eKeysClicked;
    private onImportE2eKeysClicked;
    private updateBlacklistDevicesFlag;
}
export {};
