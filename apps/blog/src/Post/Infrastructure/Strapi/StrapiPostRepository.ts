import Post from '@/Post/Domain/Post'
import type { PostRepository } from '@/Post/Domain/PostRepository'
import { PostNotFound } from '@/Post/Domain/errors/PostNotFound'
import type { StrapiEntityApiDTO } from '@/Shared/Api/Infrastructure/Strapi/DTO/StrapiEntityApiDTO'
import { inject, injectable } from 'ioc-container'
import type { HttpService } from 'src/Shared/Api/Domain/HttpService'
import types from '@/Shared/Container/types'
import type { StrapiListingApiDTO } from '@/Shared/Api/Infrastructure/Strapi/DTO/StrapiListingApiDTO'

interface StrapiPost {
  id: number
  attributes: {
    title: string
    metaTitle: string
    metaDescription: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    content: string
    slug: string
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
      attributes.title,
      attributes.metaTitle,
      attributes.metaDescription,
      attributes.slug,
      attributes.content,
      new Date(attributes.createdAt),
    )
  }

  async findBySlugOrFail(slug: string): Promise<Post> {
    const response = await this.api.get<StrapiListingApiDTO<StrapiPost>>(
      `${this.endpoint}?filters[slug][$eq]=${slug}`,
    )
    if (response.data.length === 0) throw PostNotFound.createFromSlug(slug)
    const post = response.data[0]
    const attributes = post.attributes
    return new Post(
      post.id,
      attributes.title,
      attributes.metaTitle,
      attributes.metaDescription,
      attributes.slug,
      attributes.content,
      new Date(attributes.createdAt),
    )
  }
}
