import type StrapiAPI from 'src/Shared/Infrastructure/Strapi/StrapiAPI'
import Post from '../../Domain/Post'
import type { PostRepository } from '../../Domain/PostRepository'
import { PostNotFound } from 'src/Post/Domain/errors/PostNotFound'

export class StrapiPostRepository implements PostRepository {
  private endpoint: string = 'posts'

  constructor(private api: StrapiAPI) {}

  async findOrFail(id: number): Promise<Post> {
    const data = await this.api.get(this.endpoint, {})
    if (0 === data.length) throw PostNotFound.createFromId(id)

    return data.map()
  }
}
