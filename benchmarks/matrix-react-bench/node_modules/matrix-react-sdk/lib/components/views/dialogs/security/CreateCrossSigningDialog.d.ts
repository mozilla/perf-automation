import React from 'react';
interface IProps {
    accountPassword?: string;
    tokenLogin?: boolean;
    onFinished?: (success: boolean) => void;
}
interface IState {
    error: Error | null;
    canUploadKeysWithPasswordOnly?: boolean;
    accountPassword: string;
}
export default class CreateCrossSigningDialog extends React.PureComponent<IProps, IState> {
    constructor(props: IProps);
    componentDidMount(): void;
    private queryKeyUploadAuth;
    private doBootstrapUIAuth;
    private bootstrapCrossSigning;
    private onCancel;
    render(): JSX.Element;
}
export {};
