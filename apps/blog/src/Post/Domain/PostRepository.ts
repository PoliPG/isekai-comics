import type Post from './Post'

export interface PostRepository {
  findOrFail(id: number): Promise<Post>
}
