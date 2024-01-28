import type { Message } from 'message-bus'

export class PostViewCommand implements Message {
  readonly id: number

  getName(): string {
    return this.constructor.name
  }

  constructor(id: number) {
    this.id = id
  }
}
