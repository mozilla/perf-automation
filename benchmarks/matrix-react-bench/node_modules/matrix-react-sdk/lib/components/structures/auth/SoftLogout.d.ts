import React from 'react';
import { LoginFlow } from "../../../Login";
interface IProps {
    realQueryParams: {
        loginToken?: string;
    };
    fragmentAfterLogin?: string;
    onTokenLoginCompleted: () => void;
}
interface IState {
    loginView: number;
    keyBackupNeeded: boolean;
    busy: boolean;
    password: string;
    errorText: string;
    flows: LoginFlow[];
}
export default class SoftLogout extends React.Component<IProps, IState> {
    constructor(props: any);
    componentDidMount(): void;
    onClearAll: () => void;
    private initLogin;
    onPasswordChange: (ev: any) => void;
    onForgotPassword: () => void;
    onPasswordLogin: (ev: any) => Promise<void>;
    trySsoLogin(): Promise<void>;
    private renderSignInSection;
    render(): JSX.Element;
}
export {};
