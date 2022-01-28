import React from 'react';
interface IProps {
    activeAgo?: number;
    currentlyActive?: boolean;
    presenceState?: string;
}
export default class PresenceLabel extends React.Component<IProps> {
    static defaultProps: {
        activeAgo: number;
        presenceState: any;
    };
    private getDuration;
    private getPrettyPresence;
    render(): JSX.Element;
}
export {};
