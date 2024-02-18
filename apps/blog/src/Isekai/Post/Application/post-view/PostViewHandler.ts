import { inject, injectable } from 'ioc-container'
import type { PostRepository } from '../../Domain/PostRepository'
import TYPES from '../../../Shared/Container/types'
import { PostViewDTO } from './DTO/PostViewDTO'
import type { CommandHandler } from '../../../Shared/Command/CommandHandler'
import type { PostViewCommand } from './PostViewCommand'
import type { ImageUrlResolver } from '@/Isekai/Media/Domain/ImageUrlResolver'

@injectable()
class PostViewHandler implements CommandHandler<PostViewDTO> {
  constructor(
    @inject(TYPES.PostRepository) private postRepository: PostRepository,
    @inject(TYPES.ImageUrlResolver) private imageUrlResolver: ImageUrlResolver,
  ) {}

  async handle(command: PostViewCommand): Promise<PostViewDTO> {
    const post = await this.postRepository.findBySlugOrFail(command.slug)
    return new PostViewDTO(post, this.imageUrlResolver)
  }
}

export default PostViewHandler
