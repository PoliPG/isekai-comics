import { inject, injectable } from 'ioc-container'
import type { PostRepository } from '@/Isekai/Post/Domain/PostRepository'
import TYPES from '@/Isekai/Shared/Container/types'
import type { CommandHandler } from '@/Isekai/Shared/Command/CommandHandler'
import type GetPostsCommand from './GetPostsCommand'
import { PostListDTO } from './DTO/PostListDTO'
import type { ImageUrlResolver } from '@/Isekai/Media/Domain/ImageUrlResolver'

@injectable()
class GetPostsCommandHandler implements CommandHandler<PostListDTO[]> {
  constructor(
    @inject(TYPES.PostRepository) private postRepository: PostRepository,
    @inject(TYPES.ImageUrlResolver) private imageUrlResolver: ImageUrlResolver,
  ) {}

  async handle(command: GetPostsCommand): Promise<PostListDTO[]> {
    const posts = await this.postRepository.getPosts()
    return posts.map((post) => new PostListDTO(post, this.imageUrlResolver))
  }
}

export default GetPostsCommandHandler
