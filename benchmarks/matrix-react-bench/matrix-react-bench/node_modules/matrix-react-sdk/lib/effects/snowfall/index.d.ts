import ICanvasEffect from '../ICanvasEffect';
export declare type SnowfallOptions = {
    /**
     * The maximum number of snowflakes to render at a given time
     */
    maxCount: number;
    /**
     * The amount of gravity to apply to the snowflakes
     */
    gravity: number;
    /**
     * The amount of drift (horizontal sway) to apply to the snowflakes. Each snowflake varies.
     */
    maxDrift: number;
};
export declare const DefaultOptions: SnowfallOptions;
export default class Snowfall implements ICanvasEffect {
    private readonly options;
    constructor(options: {
        [key: string]: any;
    });
    private context;
    private particles;
    private lastAnimationTime;
    isRunning: boolean;
    start: (canvas: HTMLCanvasElement, timeout?: number) => Promise<void>;
    stop: () => Promise<void>;
    private resetParticle;
    private renderLoop;
    private animateAndRenderSnowflakes;
}
