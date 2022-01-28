/// <reference types="react" />
import { JoinRule } from 'matrix-js-sdk/src/@types/partials';
interface IProps {
    value: JoinRule;
    label: string;
    width?: number;
    labelInvite: string;
    labelPublic: string;
    labelRestricted?: string;
    onChange(value: JoinRule): void;
}
declare const JoinRuleDropdown: ({ label, labelInvite, labelPublic, labelRestricted, value, width, onChange, }: IProps) => JSX.Element;
export default JoinRuleDropdown;
