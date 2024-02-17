import { Group, type Category, Collection } from '@/Group/Domain/Group'
import type { GroupRepository } from '@/Group/Domain/GroupRepository'
import { GroupNotFound } from '@/Group/Domain/errors/GroupNotFound'
import type { HttpService } from '@/Shared/Api/Domain/HttpService'
import type { StrapiListingApiDTO } from '@/Shared/Api/Infrastructure/Strapi/DTO/StrapiListingApiDTO'
import types from '@/Shared/Container/types'
import { inject, injectable } from 'ioc-container'
import { StrapiAPiGroupMapper } from './StrapiApiGroupMapper'

export interface StrapiApiGroupDTO {
  id: number
  attributes: {
    name: string
    type: 'collection' | 'tag' | 'category'
    slug: string
    metaTitle: string
    metaDescription: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    parent: StrapiApiGroupDTO
  }
}

@injectable()
export class StrapiApiGroupRepository implements GroupRepository {
  private endpoint: string = 'posts'

  constructor(@inject(types.BackendApi) private httpService: HttpService) {}

  async findBySlugOrFail(slug: string): Promise<Group> {
    const { data: posts } = await this.httpService.get<
      StrapiListingApiDTO<StrapiApiGroupDTO>
    >(`${this.endpoint}?filters[slug][$eq]=${slug}&populate=*`)
    if (posts.length === 0) throw GroupNotFound.createFromSlug(slug)

    const post = posts[0]
    return StrapiAPiGroupMapper.createFromDB(post)
  }

  async getCategories(): Promise<Category[]> {
    const { data: posts } = await this.httpService.get<
      StrapiListingApiDTO<StrapiApiGroupDTO>
    >(`${this.endpoint}?filters[type][$eq]=category&populate=*`)

    return posts.map(
      (post) => StrapiAPiGroupMapper.createFromDB(post) as Category,
    )
  }

  async getCollections(): Promise<Collection[]> {
    const { data: posts } = await this.httpService.get<
      StrapiListingApiDTO<StrapiApiGroupDTO>
    >(`${this.endpoint}?filters[type][$eq]=collection&populate=*`)

    return posts.map(
      (post) => StrapiAPiGroupMapper.createFromDB(post) as Category,
    )
  }
}
