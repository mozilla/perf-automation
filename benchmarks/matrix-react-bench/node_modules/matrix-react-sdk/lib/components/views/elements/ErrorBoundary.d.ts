import React, { ErrorInfo } from 'react';
interface IState {
    error: Error;
}
/**
 * This error boundary component can be used to wrap large content areas and
 * catch exceptions during rendering in the component tree below them.
 */
export default class ErrorBoundary extends React.PureComponent<{}, IState> {
    constructor(props: any);
    static getDerivedStateFromError(error: Error): Partial<IState>;
    componentDidCatch(error: Error, { componentStack }: ErrorInfo): void;
    private onClearCacheAndReload;
    private onBugReport;
    render(): React.ReactNode;
}
export {};
