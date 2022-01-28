import React from "react";
interface IProps {
    tags: string[];
    onAdd: (tag: string) => void;
    onRemove: (tag: string) => void;
    disabled?: boolean;
    label?: string;
    placeholder?: string;
}
interface IState {
    newTag: string;
}
/**
 * A simple, controlled, composer for entering string tags. Contains a simple
 * input, add button, and per-tag remove button.
 */
export default class TagComposer extends React.PureComponent<IProps, IState> {
    constructor(props: IProps);
    private onInputChange;
    private onAdd;
    private onRemove;
    render(): JSX.Element;
}
export {};
