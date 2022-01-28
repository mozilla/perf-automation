import ICanvasEffect from '../ICanvasEffect';
export declare type SpaceInvadersOptions = {
    /**
     * The maximum number of invaders to render at a given time
     */
    maxCount: number;
    /**
     * The amount of gravity to apply to the invaders
     */
    gravity: number;
};
export declare const DefaultOptions: SpaceInvadersOptions;
export default class SpaceInvaders implements ICanvasEffect {
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
    private animateAndRenderInvaders;
}
