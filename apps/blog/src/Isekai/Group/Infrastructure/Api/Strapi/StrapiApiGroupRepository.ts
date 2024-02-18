import { Group, type Category, Collection } from '@/Isekai/Group/Domain/Group'
import type {
  GroupRepository,
  GroupTypes,
} from '@/Isekai/Group/Domain/GroupRepository'
import { GroupNotFound } from '@/Isekai/Group/Domain/errors/GroupNotFound'
import type { HttpService } from '@/Isekai/Shared/Api/Domain/HttpService'
import type { StrapiListingApiDTO } from '@/Isekai/Shared/Api/Infrastructure/Strapi/DTO/StrapiListingApiDTO'
import types from '@/Isekai/Shared/Container/types'
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
    parent: { data: StrapiApiGroupDTO | null }
  }
}

@injectable()
export class StrapiApiGroupRepository implements GroupRepository {
  private endpoint: string = 'groups'

  constructor(@inject(types.BackendApi) private httpService: HttpService) {}

  async findBySlugOrFail(slug: string, type: GroupTypes): Promise<Group> {
    const { data: groups } = await this.httpService.get<
      StrapiListingApiDTO<StrapiApiGroupDTO>
    >(
      `${this.endpoint}?filters[slug][$eq]=${slug}&filters[type][$eq]=${type}&populate=*`,
    )
    if (groups.length === 0) throw GroupNotFound.createFromSlug(slug)

    const group = groups[0]
    return StrapiAPiGroupMapper.createFromDB(group)
  }

  async getCategories(): Promise<Category[]> {
    const { data: groups } = await this.httpService.get<
      StrapiListingApiDTO<StrapiApiGroupDTO>
    >(`${this.endpoint}?filters[type][$eq]=category&populate=*`)

    return groups.map(
      (group) => StrapiAPiGroupMapper.createFromDB(group) as Category,
    )
  }

  async getCollections(): Promise<Collection[]> {
    const { data: groups } = await this.httpService.get<
      StrapiListingApiDTO<StrapiApiGroupDTO>
    >(`${this.endpoint}?filters[type][$eq]=collection&populate=*`)

    return groups.map(
      (group) => StrapiAPiGroupMapper.createFromDB(group) as Category,
    )
  }
}
