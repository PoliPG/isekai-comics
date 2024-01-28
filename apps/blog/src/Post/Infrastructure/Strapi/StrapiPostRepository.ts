import type StrapiAPI from 'src/Shared/Infrastructure/Strapi/StrapiAPI'
import Post from '../../Domain/Post'
import type { PostRepository } from '../../Domain/PostRepository'
import { PostNotFound } from 'src/Post/Domain/errors/PostNotFound'
import type { StrapiEntityApiDTO } from 'src/Shared/Infrastructure/Strapi/DTO/StrapiEntityApiDTO'

interface StrapiPost {
  id: number
  Title: string
  MetaTitle: string
  MetaDescription: string
}

export class StrapiPostRepository implements PostRepository {
  private endpoint: string = 'posts'

  constructor(private api: StrapiAPI) {}

  async findOrFail(id: number): Promise<Post> {
    const response = await this.api.get<StrapiEntityApiDTO<StrapiPost>>(
      `${this.endpoint}/${id}`,
    )
    if (!response.data) throw PostNotFound.createFromId(id)
    const post = response.data
    return new Post(post.id, post.MetaTitle, post.MetaDescription)
  }
}
