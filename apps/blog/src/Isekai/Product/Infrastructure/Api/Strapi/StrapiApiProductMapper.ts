import { Product } from '@/Isekai/Product/Domain/Product'
import type { StrapiApiProductDTO } from './StrapiApiProductRepository'
import { Image } from '@/Isekai/Media/Domain/Image'
import type { StrapiImageDTO } from '@/Isekai/Shared/Api/Infrastructure/Strapi/DTO/StrapiImageDTO'
import type { StrapiApiCollectionDTO } from '@/Isekai/Collection/Infrastructure/Api/Strapi/StrapiApiCollectionRepository'
import { ProductCollection } from '@/Isekai/Product/Domain/ProductCollection'

export class StrapiApiProductMapper {
  static createFromApi(product: StrapiApiProductDTO): Product {
    return new Product(
      product.id,
      product.attributes.name,
      this.createImages(product.attributes.images.data),
      this.createCollection(product.attributes.collection?.data),
      [],
    )
  }

  private static createImages(images: StrapiImageDTO[]): Image[] {
    if (!images) return []

    return images.map((image) => {
      return new Image(image.attributes.url, image.attributes.ext)
    })
  }

  private static createCollection(
    collection: StrapiApiCollectionDTO | undefined | null,
  ): ProductCollection | null {
    if (!collection) return null
    return new ProductCollection(
      collection.id,
      collection.attributes.name,
      collection.attributes.slug,
    )
  }
}
