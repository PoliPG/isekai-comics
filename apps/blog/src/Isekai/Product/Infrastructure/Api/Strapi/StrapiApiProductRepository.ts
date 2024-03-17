import type { StrapiApiCollectionDTO } from '@/Isekai/Collection/Infrastructure/Api/Strapi/StrapiApiCollectionRepository'
import { Product } from '@/Isekai/Product/Domain/Product'
import type {
  FindParamsProductRepository,
  ProductRepository,
} from '@/Isekai/Product/Domain/ProductRepository'
import type { HttpService } from '@/Isekai/Shared/Api/Domain/HttpService'
import type { StrapiImageDTO } from '@/Isekai/Shared/Api/Infrastructure/Strapi/DTO/StrapiImageDTO'
import type { StrapiListingApiDTO } from '@/Isekai/Shared/Api/Infrastructure/Strapi/DTO/StrapiListingApiDTO'
import types from '@/Isekai/Shared/Container/types'
import { injectable, inject } from 'ioc-container'
import { StrapiApiProductMapper } from './StrapiApiProductMapper'

export interface StrapiApiProductDTO {
  id: number
  attributes: {
    name: string
    images: { data: StrapiImageDTO[] }
    createdAt: string
    updatedAt: string
    publishedAt: string
    collection?: { data: StrapiApiCollectionDTO | null }
    affiliates?: { data: null }
  }
}

@injectable()
export class StrapiApiProductRepository implements ProductRepository {
  private endpoint: string = 'products'

  constructor(@inject(types.BackendApi) private httpService: HttpService) {}

  async find(params: FindParamsProductRepository): Promise<Product[]> {
    let url = ''
    const populateImages = 'populate[images][populate]=*'
    const populateCollection = 'populate[collection][populate]=*'
    const populateAffiliates = 'populate[affiliates][populate]=*'

    if (params.collection) {
      url += `filters[collection][id][$eq]=${params.collection}`
    }
    const endpoint = `${this.endpoint}?${url}&${populateImages}&${populateCollection}&${populateAffiliates}`

    const { data: products } =
      await this.httpService.get<StrapiListingApiDTO<StrapiApiProductDTO>>(
        endpoint,
      )

    return products.map((product) =>
      StrapiApiProductMapper.createFromApi(product),
    )
  }
}
