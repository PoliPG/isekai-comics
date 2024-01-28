import type { Command } from './Commad'

export interface CommandHandler<T> {
  handle(command: Command): Promise<T>
}
