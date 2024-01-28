import { Bus, Callable, Message, Registry } from './types';
export declare class MessageBus implements Bus {
    private subscribers;
    private static nextId;
    constructor();
    dispatch<T>(message: Message): Promise<T | void>;
    register(event: string, callback: Callable): Registry;
    private getSuscribers;
    private getNextId;
}
//# sourceMappingURL=message-bus.d.ts.map