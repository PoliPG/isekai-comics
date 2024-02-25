import type { Collection } from '@/Isekai/Collection/Domain/Collection'
import type { ImageUrlResolver } from '@/Isekai/Media/Domain/ImageUrlResolver'
import { ProductListDTO } from '@/Isekai/Product/Application/DTO/ProductListDTO'
import type { Product } from '@/Isekai/Product/Domain/Product'

interface MainBannerCollectionDTO {
  title: string
  description: string
  mainImage: string
  backgroundImage: string
}

interface ChildrenCollectionDTO {
  name: string
  slug: string
  mainImage: string
}

interface ParentCollectionDTO {
  name: string
  slug: string
}

export class CollectionViewDTO {
  readonly name: string
  readonly metaTitle: string
  readonly metaDescription: string
  readonly mainImage: string
  readonly mainBanner: MainBannerCollectionDTO
  readonly children: ChildrenCollectionDTO[]
  readonly parent: ParentCollectionDTO | null = null
  readonly products: ProductListDTO[]

  constructor(
    collection: Collection,
    urlResolver: ImageUrlResolver,
    products: Product[],
  ) {
    this.name = collection.name
    this.metaTitle = collection.metaTitle
    this.metaDescription = collection.metaDescription
    this.mainImage = urlResolver.resolve(collection.mainImage)
    this.mainBanner = {
      title: collection.mainBanner.title,
      description: collection.mainBanner.description,
      mainImage: urlResolver.resolve(collection.mainBanner.mainImage),
      backgroundImage: urlResolver.resolve(
        collection.mainBanner.backgroundImage,
      ),
    }
    this.children = collection.children.map((children) => {
      return {
        name: children.name,
        slug: children.slug,
        mainImage: urlResolver.resolve(children.mainImage),
      }
    })
    if (collection.parent)
      this.parent = {
        name: collection.parent.name,
        slug: collection.parent.slug,
      }
    this.products = products.map(
      (product) => new ProductListDTO(product, urlResolver),
    )
  }
}
