import ICanvasEffect from '../ICanvasEffect';
export declare type FireworksOptions = {
    /**
     * max fireworks count
     */
    maxCount: number;
    /**
     * gravity value that firework adds to shift from it's start position
     */
    gravity: number;
};
export declare const DefaultOptions: FireworksOptions;
export default class Fireworks implements ICanvasEffect {
    private readonly options;
    constructor(options: {
        [key: string]: any;
    });
    private context;
    private supportsAnimationFrame;
    private particles;
    isRunning: boolean;
    start: (canvas: HTMLCanvasElement, timeout?: number) => Promise<void>;
    private updateWorld;
    private update;
    private paint;
    private createFirework;
    stop: () => Promise<void>;
    private drawParticle;
    private move;
}
