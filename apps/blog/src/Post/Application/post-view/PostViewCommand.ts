import type { Command } from '../../../Shared/Command/Commad'

export class PostViewCommand implements Command {
  readonly id: number

  getName(): string {
    return this.constructor.name
  }

  constructor(id: number) {
    this.id = id
  }
}
