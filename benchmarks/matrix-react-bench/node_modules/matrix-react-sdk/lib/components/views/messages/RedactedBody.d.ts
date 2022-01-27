import React from "react";
import { MatrixEvent } from "matrix-js-sdk/src/models/event";
import { IBodyProps } from "./IBodyProps";
interface IProps {
    mxEvent: MatrixEvent;
}
declare const RedactedBody: React.ForwardRefExoticComponent<(IBodyProps | IProps) & React.RefAttributes<any>>;
export default RedactedBody;
