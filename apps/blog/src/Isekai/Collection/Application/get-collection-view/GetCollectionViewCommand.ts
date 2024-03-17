import type { Command } from '@/Isekai/Shared/Command/Commad'

export class GetCollectionViewCommand implements Command {
  readonly slug: string

  constructor(slug: string) {
    this.slug = slug
  }

  getName(): string {
    return GetCollectionViewCommand.name
  }
}
