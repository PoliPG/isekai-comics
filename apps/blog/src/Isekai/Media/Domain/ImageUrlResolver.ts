import type { Image } from './Image'

export interface ImageUrlResolver {
  resolve(image: Image): string
}
