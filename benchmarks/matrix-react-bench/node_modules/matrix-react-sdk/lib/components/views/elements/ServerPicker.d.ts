/// <reference types="react" />
import { ValidatedServerConfig } from "../../../utils/AutoDiscoveryUtils";
interface IProps {
    title?: string;
    dialogTitle?: string;
    serverConfig: ValidatedServerConfig;
    onServerConfigChange?(config: ValidatedServerConfig): void;
}
declare const ServerPicker: ({ title, dialogTitle, serverConfig, onServerConfigChange }: IProps) => JSX.Element;
export default ServerPicker;
