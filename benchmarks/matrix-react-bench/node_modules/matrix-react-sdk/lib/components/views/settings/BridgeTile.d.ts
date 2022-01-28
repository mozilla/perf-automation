import React from 'react';
import PropTypes from 'prop-types';
import { MatrixEvent } from "matrix-js-sdk/src/models/event";
import { Room } from "matrix-js-sdk/src/models/room";
interface IProps {
    ev: MatrixEvent;
    room: Room;
}
export default class BridgeTile extends React.PureComponent<IProps> {
    static propTypes: {
        ev: PropTypes.Validator<object>;
        room: PropTypes.Validator<object>;
    };
    render(): JSX.Element;
}
export {};
