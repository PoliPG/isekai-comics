import { inject, injectable } from 'ioc-container'
import type { PostRepository } from '../../Domain/PostRepository'
import TYPES from '../../../Shared/Container/types'
import { PostViewDTO } from './DTO/PostViewDTO'
import type { CommandHandler } from '../../../Shared/Command/CommandHandler'
import type { PostViewCommand } from './PostViewCommand'

@injectable()
class PostViewHandler implements CommandHandler<PostViewDTO> {
  private postRepository: PostRepository

  constructor(@inject(TYPES.PostRepository) postRepository: PostRepository) {
    this.postRepository = postRepository
  }

  async handle(command: PostViewCommand): Promise<PostViewDTO> {
    const post = await this.postRepository.findOrFail(command.id)
    return new PostViewDTO(post)
  }
}

export default PostViewHandler
