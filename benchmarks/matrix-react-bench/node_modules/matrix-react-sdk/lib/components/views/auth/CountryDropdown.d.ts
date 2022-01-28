import React from 'react';
import { PhoneNumberCountryDefinition } from '../../../phonenumber';
interface IProps {
    value?: string;
    onOptionChange: (country: PhoneNumberCountryDefinition) => void;
    isSmall: boolean;
    showPrefix: boolean;
    className?: string;
    disabled?: boolean;
}
interface IState {
    searchQuery: string;
    defaultCountry: PhoneNumberCountryDefinition;
}
export default class CountryDropdown extends React.Component<IProps, IState> {
    constructor(props: IProps);
    componentDidMount(): void;
    private onSearchChange;
    private onOptionChange;
    private flagImgForIso2;
    private getShortOption;
    render(): React.ReactNode;
}
export {};
