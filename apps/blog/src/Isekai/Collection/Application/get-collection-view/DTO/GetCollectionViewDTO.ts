import type { Collection } from '@/Isekai/Collection/Domain/Collection'
import type { ImageUrlResolver } from '@/Isekai/Media/Domain/ImageUrlResolver'

export class CollectionViewDTO {
  readonly name: string
  readonly metaTitle: string
  readonly metaDescription: string
  readonly backgroundImage: string
  readonly mainImage: string

  constructor(collection: Collection, urlResolver: ImageUrlResolver) {
    this.name = collection.name
    this.metaTitle = collection.metaTitle
    this.metaDescription = collection.metaDescription
    this.backgroundImage = urlResolver.resolve(collection.backgroundImage)
    this.mainImage = urlResolver.resolve(collection.mainImage)
  }
}
