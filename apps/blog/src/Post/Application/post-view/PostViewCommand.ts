import type { Command } from '@/Shared/Command/Commad'

export class PostViewCommand implements Command {
  readonly slug: string

  getName(): string {
    return this.constructor.name
  }

  constructor(slug: string) {
    this.slug = slug
  }
}
