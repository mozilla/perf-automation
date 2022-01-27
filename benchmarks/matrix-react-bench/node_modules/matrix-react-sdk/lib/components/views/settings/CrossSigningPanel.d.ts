import React from 'react';
interface IState {
    error?: Error;
    crossSigningPublicKeysOnDevice?: boolean;
    crossSigningPrivateKeysInStorage?: boolean;
    masterPrivateKeyCached?: boolean;
    selfSigningPrivateKeyCached?: boolean;
    userSigningPrivateKeyCached?: boolean;
    homeserverSupportsCrossSigning?: boolean;
    crossSigningReady?: boolean;
}
export default class CrossSigningPanel extends React.PureComponent<{}, IState> {
    private unmounted;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private onAccountData;
    private onBootstrapClick;
    private onStatusChanged;
    private getUpdatedStatus;
    /**
     * Bootstrapping cross-signing take one of these paths:
     * 1. Create cross-signing keys locally and store in secret storage (if it
     *    already exists on the account).
     * 2. Access existing secret storage by requesting passphrase and accessing
     *    cross-signing keys as needed.
     * 3. All keys are loaded and there's nothing to do.
     * @param {bool} [forceReset] Bootstrap again even if keys already present
     */
    private bootstrapCrossSigning;
    private resetCrossSigning;
    render(): JSX.Element;
}
export {};
