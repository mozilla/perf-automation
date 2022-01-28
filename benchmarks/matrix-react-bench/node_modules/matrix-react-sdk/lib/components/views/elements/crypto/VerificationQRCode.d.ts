import React from "react";
import { QRCodeData } from "matrix-js-sdk/src/crypto/verification/QRCode";
interface IProps {
    qrCodeData: QRCodeData;
}
export default class VerificationQRCode extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
