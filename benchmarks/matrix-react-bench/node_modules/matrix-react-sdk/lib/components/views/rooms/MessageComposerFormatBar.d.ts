import React from 'react';
export declare enum Formatting {
    Bold = "bold",
    Italics = "italics",
    Strikethrough = "strikethrough",
    Code = "code",
    Quote = "quote",
    InsertLink = "insert_link"
}
interface IProps {
    shortcuts: Partial<Record<Formatting, string>>;
    onAction(action: Formatting): void;
}
interface IState {
    visible: boolean;
}
export default class MessageComposerFormatBar extends React.PureComponent<IProps, IState> {
    private readonly formatBarRef;
    constructor(props: IProps);
    render(): JSX.Element;
    showAt(selectionRect: DOMRect): void;
    hide(): void;
}
export {};
