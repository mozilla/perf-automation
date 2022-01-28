import React from 'react';
import { MatrixEvent } from "matrix-js-sdk/src/models/event";
interface IProps {
    mxEvent: MatrixEvent;
}
declare const EncryptionEvent: React.ForwardRefExoticComponent<IProps & React.RefAttributes<HTMLDivElement>>;
export default EncryptionEvent;
