import React from "react";
import { MatrixClient } from "matrix-js-sdk/src/client";
import { ISSOFlow } from "../../../Login";
interface IProps {
    matrixClient: MatrixClient;
    flow: ISSOFlow;
    loginType?: "sso" | "cas";
    fragmentAfterLogin?: string;
    primary?: boolean;
}
declare const SSOButtons: React.FC<IProps>;
export default SSOButtons;
