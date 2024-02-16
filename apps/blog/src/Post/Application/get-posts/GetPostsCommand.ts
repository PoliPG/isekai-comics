import type { Command } from '@/Shared/Command/Commad'

export default class GetPostsCommand implements Command {
  readonly nPosts: number

  constructor(nPosts: number) {
    this.nPosts = nPosts
  }

  getName(): string {
    return GetPostsCommand.name
  }
}
