import type { FindPost } from './FindPost'
import type { QueryHandler } from 'src/Shared/Application/Query/QueryHandler'
import { inject, injectable } from 'ioc-container'
import type { PostRepository } from 'src/Post/Domain/PostRepository'
import TYPES from 'src/Post/types'
import { PostDTO } from '../DTO/PostDTO'

@injectable()
class FindPostsHandler implements QueryHandler<PostDTO> {
  private postRepository: PostRepository

  constructor(@inject(TYPES.PostRepository) postRepository: PostRepository) {
    this.postRepository = postRepository
  }

  async handle(find: FindPost): Promise<PostDTO> {
    return new PostDTO((await this.postRepository.findOrFail(find.id)).getID())
  }
}

export default FindPostsHandler
