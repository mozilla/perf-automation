import ICanvasEffect from '../ICanvasEffect';
export declare type RainfallOptions = {
    /**
     * The maximum number of raindrops to render at a given time
     */
    maxCount: number;
    /**
     * The speed of the raindrops
     */
    speed: number;
};
export declare const DefaultOptions: RainfallOptions;
export default class Rainfall implements ICanvasEffect {
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
    private animateAndRenderRaindrops;
}
