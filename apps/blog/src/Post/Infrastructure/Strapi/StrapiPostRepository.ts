import Post from '@post/Domain/Post'
import type { PostRepository } from '@post/Domain/PostRepository'
import { PostNotFound } from '@post/Domain/errors/PostNotFound'
import type { StrapiEntityApiDTO } from '@shared/Api/Infrastructure/Strapi/DTO/StrapiEntityApiDTO'
import type StrapiAPI from '@shared/Api/Infrastructure/Strapi/StrapiAPI'

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
