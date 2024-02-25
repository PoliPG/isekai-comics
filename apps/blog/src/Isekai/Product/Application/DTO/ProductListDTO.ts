import type { ImageUrlResolver } from '@/Isekai/Media/Domain/ImageUrlResolver'
import type { Product } from '../../Domain/Product'

export class ProductListDTO {
  readonly name: string
  readonly images: string[]

  constructor(product: Product, imageUrlResolver: ImageUrlResolver) {
    this.name = product.name
    this.images = product.images.map((image) => imageUrlResolver.resolve(image))
  }
}
