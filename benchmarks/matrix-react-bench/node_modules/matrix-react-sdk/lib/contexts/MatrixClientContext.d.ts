import React, { ComponentClass } from "react";
import { MatrixClient } from "matrix-js-sdk/src/client";
declare const MatrixClientContext: React.Context<MatrixClient>;
export default MatrixClientContext;
export interface MatrixClientProps {
    mxClient: MatrixClient;
}
export declare const withMatrixClientHOC: <ComposedComponentProps extends {}>(ComposedComponent: React.ComponentClass<ComposedComponentProps, any>) => React.ForwardRefExoticComponent<React.PropsWithoutRef<Omit<ComposedComponentProps, "mxClient">> & React.RefAttributes<React.Component<ComposedComponentProps, any, any>>>;
