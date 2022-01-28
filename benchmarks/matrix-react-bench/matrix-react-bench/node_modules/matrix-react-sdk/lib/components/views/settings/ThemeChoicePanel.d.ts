import React from 'react';
interface IProps {
}
interface IThemeState {
    theme: string;
    useSystemTheme: boolean;
}
export interface CustomThemeMessage {
    isError: boolean;
    text: string;
}
interface IState extends IThemeState {
    customThemeUrl: string;
    customThemeMessage: CustomThemeMessage;
}
export default class ThemeChoicePanel extends React.Component<IProps, IState> {
    private themeTimer;
    constructor(props: IProps);
    static calculateThemeState(): IThemeState;
    private onThemeChange;
    private onUseSystemThemeChanged;
    private onAddCustomTheme;
    private onCustomThemeChange;
    private renderHighContrastCheckbox;
    private highContrastThemeChanged;
    render(): React.ReactElement<HTMLDivElement>;
    apparentSelectedThemeId(): string;
}
export {};
