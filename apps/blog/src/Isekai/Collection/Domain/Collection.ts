import type { Image } from '@/Isekai/Media/Domain/Image'

export class Collection {
  protected _name: string
  protected _slug: string
  protected _parent: Collection | null
  protected _metaDescription: string
  protected _metaTitle: string
  protected _backgroundImage: Image
  protected _mainImage: Image

  constructor(
    name: string,
    slug: string,
    parent: Collection | null,
    metaTitle: string,
    metaDescription: string,
    backgroundImage: Image,
    mainImage: Image,
  ) {
    this._name = name
    this._slug = slug
    this._parent = parent
    this._metaDescription = metaDescription
    this._metaTitle = metaTitle
    this._backgroundImage = backgroundImage
    this._mainImage = mainImage
  }

  get name(): string {
    return this._name
  }

  get metaDescription(): string {
    return this._metaDescription
  }

  get metaTitle(): string {
    return this._metaTitle
  }

  get backgroundImage(): Image {
    return this._backgroundImage
  }

  get mainImage(): Image {
    return this._mainImage
  }
}
