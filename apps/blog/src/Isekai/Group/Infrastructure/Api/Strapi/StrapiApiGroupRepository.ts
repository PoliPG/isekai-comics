import { Group, type Category } from '@/Isekai/Group/Domain/Group'
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
import type { StrapiPublishedContent } from '@/Isekai/Shared/Api/Infrastructure/Strapi/DTO/StrapiContent'

export interface StrapiApiGroupDataDTO {
  name: string
  type: 'tag' | 'category'
  slug: string
  Seo?: {
    metaTitle: string
    metaDescription: string
  }
  parent?: { data: StrapiApiGroupDTO | null }
}

export type StrapiApiGroupDTO = StrapiPublishedContent<StrapiApiGroupDataDTO>

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
}
