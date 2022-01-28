import { MatrixEvent } from 'matrix-js-sdk/src/models/event';
import { Room } from 'matrix-js-sdk/src/models/room';
export default class Resend {
    static resendUnsentEvents(room: Room): Promise<void[]>;
    static cancelUnsentEvents(room: Room): void;
    static resend(event: MatrixEvent): Promise<void>;
    static removeFromQueue(event: MatrixEvent): void;
}
