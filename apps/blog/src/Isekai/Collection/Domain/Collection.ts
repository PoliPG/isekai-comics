import type { Image } from '@/Isekai/Media/Domain/Image'
import type { MainBannerCollection } from './MainBannerCollection'

export class Collection {
  protected _name: string
  protected _slug: string
  protected _parent: Collection | null
  protected _metaDescription: string
  protected _metaTitle: string
  protected _mainImage: Image
  protected _mainBanner: MainBannerCollection

  constructor(
    name: string,
    slug: string,
    parent: Collection | null,
    metaTitle: string,
    metaDescription: string,
    mainImage: Image,
    mainBanner: MainBannerCollection,
  ) {
    this._name = name
    this._slug = slug
    this._parent = parent
    this._metaDescription = metaDescription
    this._metaTitle = metaTitle
    this._mainBanner = mainBanner
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

  get mainBanner(): MainBannerCollection {
    return this._mainBanner
  }

  get mainImage(): Image {
    return this._mainImage
  }
}
