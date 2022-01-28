import * as React from "react";
import { QRCodeSegment, QRCodeToDataURLOptions } from "qrcode";
interface IProps extends QRCodeToDataURLOptions {
    data: string | QRCodeSegment[];
    className?: string;
}
declare const QRCode: React.FC<IProps>;
export default QRCode;
