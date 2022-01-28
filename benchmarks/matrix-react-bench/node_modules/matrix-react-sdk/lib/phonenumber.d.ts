export declare function looksValid(phoneNumber: string): boolean;
export declare const getEmojiFlag: (countryCode: string) => string;
export interface PhoneNumberCountryDefinition {
    iso2: string;
    name: string;
    prefix: string;
}
export declare const COUNTRIES: PhoneNumberCountryDefinition[];
