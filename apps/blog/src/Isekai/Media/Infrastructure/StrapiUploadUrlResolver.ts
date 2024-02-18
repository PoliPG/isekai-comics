import { injectable } from 'ioc-container'
import type { Image } from '../Domain/Image'
import type { ImageUrlResolver } from '../Domain/ImageUrlResolver'

@injectable()
export class StrapiImageUrlResolver implements ImageUrlResolver {
  private url: string

  constructor() {
    this.url = process.env.STRAPI_URL ?? ''
  }

  resolve(image: Image): string {
    return `${this.url}${image.url}`
  }
}
