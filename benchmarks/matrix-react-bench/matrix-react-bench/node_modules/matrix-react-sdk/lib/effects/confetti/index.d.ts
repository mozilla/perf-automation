import ICanvasEffect from '../ICanvasEffect';
export declare type ConfettiOptions = {
    /**
     * max confetti count
     */
    maxCount: number;
    /**
     * particle animation speed
     */
    speed: number;
    /**
     * the confetti animation frame interval in milliseconds
     */
    frameInterval: number;
    /**
     * the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)
     */
    alpha: number;
    /**
     * use gradient instead of solid particle color
     */
    gradient: boolean;
};
export declare const DefaultOptions: ConfettiOptions;
export default class Confetti implements ICanvasEffect {
    private readonly options;
    constructor(options: {
        [key: string]: any;
    });
    private context;
    private supportsAnimationFrame;
    private colors;
    private lastFrameTime;
    private particles;
    private waveAngle;
    isRunning: boolean;
    start: (canvas: HTMLCanvasElement, timeout?: number) => Promise<void>;
    stop: () => Promise<void>;
    private resetParticle;
    private runAnimation;
    private drawParticles;
    private updateParticles;
}
