import React, { ReactNode, KeyboardEvent } from 'react';
import { IDialogProps } from "./IDialogProps";
interface IProps extends IDialogProps {
    title?: string;
    description?: ReactNode;
    className?: string;
    button?: boolean | string;
    hasCloseButton?: boolean;
    fixedWidth?: boolean;
    onKeyDown?(event: KeyboardEvent): void;
}
export default class InfoDialog extends React.Component<IProps> {
    static defaultProps: {
        title: string;
        description: string;
        hasCloseButton: boolean;
    };
    private onFinished;
    render(): JSX.Element;
}
export {};
