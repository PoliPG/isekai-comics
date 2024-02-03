export interface Registry {
    unregister: () => void;
}
export interface Message {
    getName(): string;
}
export interface Callable {
    handle(message: Message): Promise<any>;
}
export interface SuscriberCallabe {
    id: number;
    callable: Callable;
}
export declare class Subscriber extends Map<string, SuscriberCallabe[]> {
}
export interface Bus {
    commit<T extends object>(message: Message): Promise<T>;
    dispatch(message: Message): Promise<void>;
    register(event: string, callback: Callable): Registry;
}
//# sourceMappingURL=types.d.ts.map