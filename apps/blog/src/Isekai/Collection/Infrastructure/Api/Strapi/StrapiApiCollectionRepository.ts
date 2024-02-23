import { GroupNotFound } from '@/Isekai/Group/Domain/errors/GroupNotFound'
import type { HttpService } from '@/Isekai/Shared/Api/Domain/HttpService'
import type { StrapiListingApiDTO } from '@/Isekai/Shared/Api/Infrastructure/Strapi/DTO/StrapiListingApiDTO'
import types from '@/Isekai/Shared/Container/types'
import { inject, injectable } from 'ioc-container'
import type { CollectionRepository } from '@/Isekai/Collection/Domain/CollectionRepository'
import { StrapiApiCollectionMapper } from './StrapiApiCollectionMapper'
import type { Collection } from '@/Isekai/Collection/Domain/Collection'
import type { StrapiImageDTO } from '@/Isekai/Shared/Api/Infrastructure/Strapi/DTO/StrapiImageDTO'
import { CollectionNotFound } from '@/Isekai/Collection/Domain/errors/CollectionNotFound'

export interface StrapiApiCollectionDTO {
  id: number
  attributes: {
    name: string
    slug: string
    metaTitle: string
    metaDescription: string
    mainImage: StrapiImageDTO
    createdAt: string
    updatedAt: string
    publishedAt: string
    parent: { data: StrapiApiCollectionDTO | null }
    mainBanner: {
      mainImage: StrapiImageDTO
      backgroundImage: StrapiImageDTO
      title: string
      description: string
    }
  }
}

@injectable()
export class StrapiApiCollectionRepository implements CollectionRepository {
  private endpoint: string = 'collections'

  constructor(@inject(types.BackendApi) private httpService: HttpService) {}

  async findBySlugOrFail(slug: string): Promise<Collection> {
    const { data: groups } = await this.httpService.get<
      StrapiListingApiDTO<StrapiApiCollectionDTO>
    >(
      `${this.endpoint}?filters[slug][$eq]=${slug}&populate[mainImage]=*&populate[parent]=*&populate[mainBanner][populate]=*`,
    )
    if (groups.length === 0) throw CollectionNotFound.createFromSlug(slug)

    const group = groups[0]
    return StrapiApiCollectionMapper.createFromDB(group)
  }
}
