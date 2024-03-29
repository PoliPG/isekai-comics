import {
  Bus,
  Callable,
  Message,
  Registry,
  Subscriber,
  SuscriberCallabe,
} from './types'


export class MessageBus implements Bus {
  private subscribers: Subscriber
  private static nextId = 0

  constructor() {
    this.subscribers = new Subscriber()
  }

  public async commit<T extends object>(message: Message): Promise<T> {
    const messageSuscribers = this.getSuscribers(message.getName())

    if (messageSuscribers === undefined) {
      throw new Error('Not suscriber found')
    }

    return messageSuscribers[0].callable.handle(message)
  }

  public async dispatch(message: Message): Promise<void> {
    const messageSuscribers = this.getSuscribers(message.getName())

    if (messageSuscribers === undefined) {
      throw new Error('Not suscriber found')
    }

    for (let i = 0; i <= messageSuscribers.length; i++) {
      await messageSuscribers[i].callable.handle(message)
    }
  }

  public register(event: string, callback: Callable): Registry {
    const id = this.getNextId()
    let suscriber = this.getSuscribers(event)

    if (!suscriber) this.subscribers.set(event, [{ id, callable: callback }])
    else {
      suscriber.push({ id, callable: callback })
    }

    return {
      unregister: () => {
        const callables = this.getSuscribers(event)!.filter(
          (callable) => callable.id !== id,
        )
        this.subscribers.delete(event)
        if (callables.length > 0) this.subscribers.set(event, callables)
      },
    }
  }

  private getSuscribers(event: string): SuscriberCallabe[] | undefined {
    return this.subscribers.get(event)
  }

  private getNextId(): number {
    return MessageBus.nextId++
  }
}
