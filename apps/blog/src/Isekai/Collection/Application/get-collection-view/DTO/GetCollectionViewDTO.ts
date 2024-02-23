import type { Collection } from '@/Isekai/Collection/Domain/Collection'
import type { ImageUrlResolver } from '@/Isekai/Media/Domain/ImageUrlResolver'

interface MainBannerCollectionDTO {
  title: string
  description: string
  mainImage: string
  backgroundImage: string
}

export class CollectionViewDTO {
  readonly name: string
  readonly metaTitle: string
  readonly metaDescription: string
  readonly mainImage: string
  readonly mainBanner: MainBannerCollectionDTO

  constructor(collection: Collection, urlResolver: ImageUrlResolver) {
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
  }
}
