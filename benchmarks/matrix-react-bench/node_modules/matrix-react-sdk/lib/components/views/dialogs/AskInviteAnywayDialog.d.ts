import React from 'react';
interface IProps {
    unknownProfileUsers: Array<{
        userId: string;
        errorText: string;
    }>;
    onInviteAnyways: () => void;
    onGiveUp: () => void;
    onFinished: (success: boolean) => void;
}
export default class AskInviteAnywayDialog extends React.Component<IProps> {
    private onInviteClicked;
    private onInviteNeverWarnClicked;
    private onGiveUpClicked;
    render(): JSX.Element;
}
export {};
