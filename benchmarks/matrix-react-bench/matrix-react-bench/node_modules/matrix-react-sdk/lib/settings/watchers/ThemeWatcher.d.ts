export default class ThemeWatcher {
    private themeWatchRef;
    private systemThemeWatchRef;
    private dispatcherRef;
    private preferDark;
    private preferLight;
    private preferHighContrast;
    private currentTheme;
    constructor();
    start(): void;
    stop(): void;
    private onChange;
    private onAction;
    recheck(forceTheme?: string): void;
    getEffectiveTheme(): string;
    private themeBasedOnSystem;
    isSystemThemeSupported(): boolean;
}
