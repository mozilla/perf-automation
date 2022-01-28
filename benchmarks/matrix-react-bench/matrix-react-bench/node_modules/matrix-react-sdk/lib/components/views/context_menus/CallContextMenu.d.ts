import React from 'react';
import PropTypes from 'prop-types';
import { IProps as IContextMenuProps } from '../../structures/ContextMenu';
import { MatrixCall } from 'matrix-js-sdk/src/webrtc/call';
interface IProps extends IContextMenuProps {
    call: MatrixCall;
}
export default class CallContextMenu extends React.Component<IProps> {
    static propTypes: {
        user: PropTypes.Requireable<object>;
    };
    constructor(props: any);
    onHoldClick: () => void;
    onUnholdClick: () => void;
    onTransferClick: () => void;
    render(): JSX.Element;
}
export {};
