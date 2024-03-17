import type { Image } from '@/Isekai/Media/Domain/Image'
import type { ProductAffiliate } from './ProductAffiliate'
import type { ProductCollection } from './ProductCollection'

export class Product {
  private _id: number
  private _images: Image[]
  private _name: string
  private _collection: ProductCollection | null
  private _affiliates: ProductAffiliate[]

  constructor(
    id: number,
    name: string,
    images: Image[],
    collection: ProductCollection | null,
    affiliates: ProductAffiliate[],
  ) {
    this._id = id
    this._name = name
    this._collection = collection
    this._images = images
    this._affiliates = affiliates
  }

  get name(): string {
    return this._name
  }

  get images(): Image[] {
    return this._images
  }

  get collection(): ProductCollection | null {
    return this._collection
  }

  get affiliates(): ProductAffiliate[] {
    return this._affiliates
  }
}
