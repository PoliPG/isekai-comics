import type { Callable } from 'message-bus'
import type { Command } from './Commad'

export interface CommandHandler<T> extends Callable {
  handle(command: Command): Promise<T>
}
