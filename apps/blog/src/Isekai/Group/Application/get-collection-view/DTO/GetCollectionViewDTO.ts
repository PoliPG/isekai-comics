import type { Collection } from '@/Isekai/Group/Domain/Group'

export class GetCollectionViewDTO {
  readonly name: string
  readonly metaTitle: string
  readonly metaDescription: string

  constructor(collection: Collection) {
    this.name = collection.name
    this.metaTitle = collection.metaTitle
    this.metaDescription = collection.metaDescription
  }
}
