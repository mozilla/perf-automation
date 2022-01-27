import { MatrixGlob } from "../utils/MatrixGlob";
export declare const RECOMMENDATION_BAN = "m.ban";
export declare const RECOMMENDATION_BAN_TYPES: string[];
export declare function recommendationToStable(recommendation: string, unstable?: boolean): string;
export declare class ListRule {
    _glob: MatrixGlob;
    _entity: string;
    _action: string;
    _reason: string;
    _kind: string;
    constructor(entity: string, action: string, reason: string, kind: string);
    get entity(): string;
    get reason(): string;
    get kind(): string;
    get recommendation(): string;
    isMatch(entity: string): boolean;
}
