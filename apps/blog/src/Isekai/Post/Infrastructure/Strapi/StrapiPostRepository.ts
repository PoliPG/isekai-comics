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
import { PostAuthor } from '../../Domain/Author/PostAuthor'
import type {
  StrapiContent,
  StrapiPublishedContent,
} from '@/Isekai/Shared/Api/Infrastructure/Strapi/DTO/StrapiContent'

interface StrapiApiAuthorDTO {
  name: string
  photo: { data: StrapiImageDTO }
  jobTitle: string
}

interface StrapiApiPostDTO {
  title: string
  contentBlocks: []
  image: { data: StrapiImageDTO }
  Seo: {
    metaTitle: string
    metaDescription: string
  }
  author: { data: StrapiPublishedContent<StrapiApiAuthorDTO> }
  content: string
  slug: string
}

type StrapiApiContentPostDTO = StrapiContent<StrapiApiPostDTO>

@injectable()
export class StrapiPostRepository implements PostRepository {
  private endpoint: string = 'posts'

  constructor(@inject(types.BackendApi) private httpService: HttpService) {}

  /**
   * Find Post by id
   */
  async findOrFail(id: number): Promise<Post> {
    let endpoint = `${this.endpoint}/${id}`
    endpoint += '?populate[Seo][populate]=*'
    endpoint += '&populate[image][populate]=*'
    endpoint += '&populate[author][populate]=*'

    const response =
      await this.httpService.get<StrapiEntityApiDTO<StrapiApiContentPostDTO>>(
        endpoint,
      )

    if (!response.data) throw PostNotFound.createFromId(id)
    const post = response.data
    return this.toDomain(post)
  }

  /**
   * Find Post by slug
   */
  async findBySlugOrFail(slug: string): Promise<Post> {
    let endpoint = `${this.endpoint}?filters[slug][$eq]=${slug}`
    endpoint += '&populate[Seo][populate]=*'
    endpoint += '&populate[image][populate]=*'
    endpoint += '&populate[author][populate]=*'

    const response =
      await this.httpService.get<StrapiListingApiDTO<StrapiApiContentPostDTO>>(
        endpoint,
      )

    if (response.data.length === 0) throw PostNotFound.createFromSlug(slug)
    const post = response.data[0]
    return this.toDomain(post)
  }

  /**
   * Get posts
   */
  async getPosts(): Promise<Post[]> {
    let endpoint = `${this.endpoint}`
    endpoint += '?populate[Seo][populate]=*'
    endpoint += '&populate[image][populate]=*'
    endpoint += '&populate[author][populate]=*'

    const response =
      await this.httpService.get<StrapiListingApiDTO<StrapiApiContentPostDTO>>(
        endpoint,
      )
    const posts = response.data

    return posts.map((post) => {
      return this.toDomain(post)
    })
  }

  /**
   * Convernt post to domain
   * @returns
   */
  private toDomain(post: StrapiApiContentPostDTO): Post {
    const attributes = post.attributes
    const imageData = attributes.image.data
    const author = attributes.author.data.attributes
    return new Post(
      post.id,
      attributes.title,
      attributes.Seo.metaTitle,
      attributes.Seo.metaDescription,
      attributes.slug,
      attributes.content,
      new Date(attributes.createdAt),
      new Image(imageData.attributes.url, imageData.attributes.ext),
      new PostAuthor(
        author.name,
        new Image(
          author.photo.data.attributes.url,
          author.photo.data.attributes.ext,
        ),
        author.jobTitle,
      ),
    )
  }
}
