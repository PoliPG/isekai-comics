import { inject, injectable } from 'ioc-container'
import type { PostRepository } from 'src/Post/Domain/PostRepository'
import TYPES from 'src/Post/types'
import { PostDTO } from '../DTO/PostDTO'
import type { CommandHandler } from 'src/Shared/Application/Command/CommandHandler'
import type { PostViewCommand } from './PostViewCommand'
import type { Callable } from 'message-bus'

@injectable()
class PostViewHandler implements CommandHandler<PostDTO>, Callable {
  private postRepository: PostRepository

  constructor(@inject(TYPES.PostRepository) postRepository: PostRepository) {
    this.postRepository = postRepository
  }

  async handle(find: PostViewCommand): Promise<PostDTO> {
    return new PostDTO((await this.postRepository.findOrFail(find.id)).getID())
  }
}

export default PostViewHandler
