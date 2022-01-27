import React from 'react';
interface IProps {
    onFinished: () => void;
    accountPassword?: string;
    tokenLogin?: boolean;
}
export default class E2eSetup extends React.Component<IProps> {
    render(): JSX.Element;
}
export {};
