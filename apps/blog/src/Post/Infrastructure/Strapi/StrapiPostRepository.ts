import Post from '../../Domain/Post'
import type { PostRepository } from '../../Domain/PostRepository'
import { PostNotFound } from '../../Domain/errors/PostNotFound'
import type { StrapiEntityApiDTO } from '../../../Shared/Api/Infrastructure/Strapi/DTO/StrapiEntityApiDTO'
import { inject, injectable } from 'ioc-container'
import type { HttpService } from 'src/Shared/Api/Domain/HttpService'
import types from '../../../Shared/Container/types'

interface StrapiPost {
  id: number
  Title: string
  MetaTitle: string
  MetaDescription: string
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
    return new Post(post.id, post.MetaTitle, post.MetaDescription)
  }
}
