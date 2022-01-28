import React from 'react';
interface IState {
    busy: boolean;
    newPersonalRule: string;
    newList: string;
}
export default class MjolnirUserSettingsTab extends React.Component<{}, IState> {
    constructor(props: any);
    private onPersonalRuleChanged;
    private onNewListChanged;
    private onAddPersonalRule;
    private onSubscribeList;
    private removePersonalRule;
    private unsubscribeFromList;
    private viewListRules;
    private renderPersonalBanListRules;
    private renderSubscribedBanLists;
    render(): JSX.Element;
}
export {};
