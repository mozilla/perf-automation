export declare const DEFAULT_THEME = "light";
interface IFontFaces {
    src: {
        format: string;
        url: string;
        local: string;
    }[];
}
interface ICustomTheme {
    colors: {
        [key: string]: string;
    };
    fonts: {
        faces: IFontFaces[];
        general: string;
        monospace: string;
    };
    is_dark?: boolean;
}
/**
 * Given a non-high-contrast theme, find the corresponding high-contrast one
 * if it exists, or return undefined if not.
 */
export declare function findHighContrastTheme(theme: string): any;
/**
 * Given a high-contrast theme, find the corresponding non-high-contrast one
 * if it exists, or return undefined if not.
 */
export declare function findNonHighContrastTheme(hcTheme: string): string;
/**
 * Decide whether the supplied theme is high contrast.
 */
export declare function isHighContrastTheme(theme: string): boolean;
export declare function enumerateThemes(): {
    [key: string]: string;
};
interface ITheme {
    id: string;
    name: string;
}
export declare function getOrderedThemes(): ITheme[];
export declare function getCustomTheme(themeName: string): ICustomTheme;
/**
 * Called whenever someone changes the theme
 * Async function that returns once the theme has been set
 * (ie. the CSS has been loaded)
 *
 * @param {string} theme new theme
 */
export declare function setTheme(theme?: string): Promise<void>;
export {};
