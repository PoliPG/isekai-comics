import Post from 'src/Post/Domain/Post'
import type { QueryPosts } from './QueryPosts'
import { PostDTO } from '../DTO/PostDTO'

export class QueryPostsHandler implements QueryHandler<PostDTO> {
  constructor() {}

  async handle(query: QueryPosts): Promise<PostDTO[]> {
    return [new PostDTO(1)]
  }
}
