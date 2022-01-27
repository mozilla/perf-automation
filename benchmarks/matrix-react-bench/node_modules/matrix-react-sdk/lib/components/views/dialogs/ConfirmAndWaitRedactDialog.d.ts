import React from 'react';
interface IProps {
    redact: () => Promise<void>;
    onFinished: (success: boolean) => void;
}
interface IState {
    isRedacting: boolean;
    redactionErrorCode: string | number;
}
export default class ConfirmAndWaitRedactDialog extends React.PureComponent<IProps, IState> {
    constructor(props: any);
    onParentFinished: (proceed: boolean) => Promise<void>;
    render(): JSX.Element;
}
export {};
