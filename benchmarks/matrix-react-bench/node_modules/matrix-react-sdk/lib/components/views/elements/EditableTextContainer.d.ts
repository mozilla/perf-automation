import React from 'react';
interface IProps {
    getInitialValue?: () => Promise<string>;
    initialValue?: string;
    placeholder?: string;
    onSubmit?: (value: string) => Promise<{} | void>;
    blurToSubmit?: boolean;
}
interface IState {
    busy: boolean;
    errorString: string;
    value: string;
}
/**
 * A component which wraps an EditableText, with a spinner while updates take
 * place.
 *
 * Parent components should supply an 'onSubmit' callback which returns a
 * promise; a spinner is shown until the promise resolves.
 *
 * The parent can also supply a 'getInitialValue' callback, which works in a
 * similarly asynchronous way. If this is not provided, the initial value is
 * taken from the 'initialValue' property.
 */
export default class EditableTextContainer extends React.Component<IProps, IState> {
    private unmounted;
    static defaultProps: Partial<IProps>;
    constructor(props: IProps);
    componentDidMount(): Promise<void>;
    componentWillUnmount(): void;
    private onValueChanged;
    render(): JSX.Element;
}
export {};
