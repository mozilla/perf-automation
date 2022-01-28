import React from 'react';
interface IProps {
    onFinished: (success: boolean) => void;
    title?: string;
    description?: React.ReactNode;
    button?: string;
    focus?: boolean;
    headerImage?: string;
}
interface IState {
    onFinished: (success: boolean) => void;
}
export default class ErrorDialog extends React.Component<IProps, IState> {
    static defaultProps: {
        focus: boolean;
        title: any;
        description: any;
        button: any;
    };
    private onClick;
    render(): JSX.Element;
}
export {};
