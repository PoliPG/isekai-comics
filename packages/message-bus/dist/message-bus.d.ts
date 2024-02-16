import { Bus, Callable, Message, Registry } from './types';
export declare class MessageBus implements Bus {
    private subscribers;
    private static nextId;
    constructor();
    commit<T extends object>(message: Message): Promise<T>;
    dispatch(message: Message): Promise<void>;
    register(event: string, callback: Callable): Registry;
    private getSuscribers;
    private getNextId;
}
//# sourceMappingURL=message-bus.d.ts.map