import Post from '../../Domain/Post'
import type { PostRepository } from '../../Domain/PostRepository'
import { PostNotFound } from '../../Domain/errors/PostNotFound'
import type { StrapiEntityApiDTO } from '../../../Shared/Api/Infrastructure/Strapi/DTO/StrapiEntityApiDTO'
import { inject, injectable } from 'ioc-container'
import type { HttpService } from 'src/Shared/Api/Domain/HttpService'
import types from '../../../Shared/Container/types'
import type { string } from 'astro/zod'

interface StrapiPost {
  id: number
  attributes: {
    Title: string
    MetaTitle: string
    MetaDescription: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    Content: string
  }
}

@injectable()
export class StrapiPostRepository implements PostRepository {
  private endpoint: string = 'posts'

  constructor(@inject(types.BackendApi) private api: HttpService) {}

  async findOrFail(id: number): Promise<Post> {
    const response = await this.api.get<StrapiEntityApiDTO<StrapiPost>>(
      `${this.endpoint}/${id}`,
    )
    if (!response.data) throw PostNotFound.createFromId(id)
    const post = response.data
    const attributes = post.attributes
    return new Post(
      post.id,
      attributes.Title,
      attributes.MetaTitle,
      attributes.MetaDescription,
    )
  }
}
