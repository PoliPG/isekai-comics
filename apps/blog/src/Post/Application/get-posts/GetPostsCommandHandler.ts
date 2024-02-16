import { inject, injectable } from 'ioc-container'
import type { PostRepository } from '@/Post/Domain/PostRepository'
import TYPES from '@/Shared/Container/types'
import type { CommandHandler } from '@/Shared/Command/CommandHandler'
import type GetPostsCommand from './GetPostsCommand'
import { PostListDTO } from './DTO/PostListDTO'

@injectable()
class GetPostsCommandHandler implements CommandHandler<PostListDTO[]> {
  private postRepository: PostRepository

  constructor(@inject(TYPES.PostRepository) postRepository: PostRepository) {
    this.postRepository = postRepository
  }

  async handle(command: GetPostsCommand): Promise<PostListDTO[]> {
    const posts = await this.postRepository.getPosts()
    return posts.map((post) => new PostListDTO(post))
  }
}

export default GetPostsCommandHandler
