import React from 'react';
interface ICaptchaFormProps {
    sitePublicKey: string;
    onCaptchaResponse: (response: string) => void;
}
interface ICaptchaFormState {
    errorText?: string;
}
/**
 * A pure UI component which displays a captcha form.
 */
export default class CaptchaForm extends React.Component<ICaptchaFormProps, ICaptchaFormState> {
    static defaultProps: {
        onCaptchaResponse: () => void;
    };
    private captchaWidgetId?;
    private recaptchaContainer;
    constructor(props: ICaptchaFormProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private isRecaptchaReady;
    private renderRecaptcha;
    private resetRecaptcha;
    private onCaptchaLoaded;
    render(): JSX.Element;
}
export {};
