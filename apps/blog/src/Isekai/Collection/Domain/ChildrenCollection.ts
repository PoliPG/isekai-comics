import type { Image } from '@/Isekai/Media/Domain/Image'

export class ChildrenCollection {
  protected _name: string
  protected _slug: string
  protected _mainImage: Image

  constructor(name: string, slug: string, mainImage: Image) {
    this._name = name
    this._slug = slug
    this._mainImage = mainImage
  }

  get name(): string {
    return this._name
  }

  get slug(): string {
    return this._slug
  }

  get mainImage(): Image {
    return this._mainImage
  }
}
