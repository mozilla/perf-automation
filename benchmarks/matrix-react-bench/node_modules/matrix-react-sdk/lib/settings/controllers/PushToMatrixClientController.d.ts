import { SettingLevel } from "../SettingLevel";
import SettingController from "./SettingController";
/**
 * When the value changes, call a setter function on the matrix client with the new value
 */
export default class PushToMatrixClientController extends SettingController {
    private setter;
    private inverse;
    constructor(setter: Function, inverse: boolean);
    onChange(level: SettingLevel, roomId: string, newValue: any): void;
}
