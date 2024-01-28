export interface Registry {
  unregister: () => void
}

export interface Message {
  getName(): string
}

export interface Callable {
  handle<T>(message: Message): Promise<T>
}

export interface SuscriberCallabe {
  id: number
  callable: Callable
}

export class Subscriber extends Map<string, SuscriberCallabe[]> {}

export interface Bus {
  dispatch<T>(message: Message): Promise<T | void>
  register(event: string, callback: Callable): Registry
}
