import Post from '@/Isekai/Post/Domain/Post'
import type { PostRepository } from '@/Isekai/Post/Domain/PostRepository'
import { PostNotFound } from '@/Isekai/Post/Domain/errors/PostNotFound'
import type { StrapiEntityApiDTO } from '@/Isekai/Shared/Api/Infrastructure/Strapi/DTO/StrapiEntityApiDTO'
import { inject, injectable } from 'ioc-container'
import types from '@/Isekai/Shared/Container/types'
import type { StrapiListingApiDTO } from '@/Isekai/Shared/Api/Infrastructure/Strapi/DTO/StrapiListingApiDTO'
import type { StrapiImageDTO } from '@/Isekai/Shared/Api/Infrastructure/Strapi/DTO/StrapiImageDTO'
import { Image } from '@/Isekai/Media/Domain/Image'
import type { HttpService } from '@/Isekai/Shared/Api/Domain/HttpService'

interface StrapiPost {
  id: number
  attributes: {
    title: string
    contentBlocks: []
    image: { data: StrapiImageDTO }
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

  constructor(@inject(types.BackendApi) private httpService: HttpService) {}

  async findOrFail(id: number): Promise<Post> {
    const response = await this.httpService.get<StrapiEntityApiDTO<StrapiPost>>(
      `${this.endpoint}/${id}?populate=*`,
    )
    if (!response.data) throw PostNotFound.createFromId(id)
    const post = response.data
    const attributes = post.attributes
    const imageData = post.attributes.image.data
    return new Post(
      post.id,
      attributes.title,
      attributes.metaTitle,
      attributes.metaDescription,
      attributes.slug,
      attributes.content,
      new Date(attributes.createdAt),
      new Image(imageData.attributes.url, imageData.attributes.ext),
    )
  }

  async findBySlugOrFail(slug: string): Promise<Post> {
    const response = await this.httpService.get<
      StrapiListingApiDTO<StrapiPost>
    >(`${this.endpoint}?filters[slug][$eq]=${slug}&populate=*`)
    if (response.data.length === 0) throw PostNotFound.createFromSlug(slug)
    const post = response.data[0]
    const attributes = post.attributes
    const imageData = attributes.image.data
    return new Post(
      post.id,
      attributes.title,
      attributes.metaTitle,
      attributes.metaDescription,
      attributes.slug,
      attributes.content,
      new Date(attributes.createdAt),
      new Image(imageData.attributes.url, imageData.attributes.ext),
    )
  }

  async getPosts(): Promise<Post[]> {
    const response = await this.httpService.get<
      StrapiListingApiDTO<StrapiPost>
    >(`${this.endpoint}?populate=*`)
    const posts = response.data

    return posts.map((post) => {
      const attributes = post.attributes
      const imageData = attributes.image.data
      return new Post(
        post.id,
        attributes.title,
        attributes.metaTitle,
        attributes.metaDescription,
        attributes.slug,
        attributes.content,
        new Date(attributes.createdAt),
        new Image(imageData.attributes.url, imageData.attributes.ext),
      )
    })
  }
}
