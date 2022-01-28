import * as React from "react";
import { ButtonEvent } from "../elements/AccessibleButton";
interface IProps {
    onFinished: (boolean: any) => void;
}
interface IState {
    value: string;
}
export default class DialpadModal extends React.PureComponent<IProps, IState> {
    private numberEntryFieldRef;
    constructor(props: any);
    onCancelClick: () => void;
    onChange: (ev: any) => void;
    onFormSubmit: (ev: any) => void;
    onDigitPress: (digit: string, ev: ButtonEvent) => void;
    onDeletePress: (ev: ButtonEvent) => void;
    onDialPress: () => Promise<void>;
    render(): JSX.Element;
}
export {};
