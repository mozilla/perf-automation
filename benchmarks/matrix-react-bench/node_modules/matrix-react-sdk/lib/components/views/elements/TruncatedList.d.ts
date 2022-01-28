import React from 'react';
interface IProps {
    truncateAt?: number;
    className?: string;
    getChildren?: (start: number, end: number) => Array<React.ReactNode>;
    getChildCount?: () => number;
    createOverflowElement?: (overflowCount: number, totalCount: number) => React.ReactNode;
}
export default class TruncatedList extends React.Component<IProps> {
    static defaultProps: {
        truncateAt: number;
        createOverflowElement(overflowCount: any, totalCount: any): JSX.Element;
    };
    private getChildren;
    private getChildCount;
    render(): JSX.Element;
}
export {};
