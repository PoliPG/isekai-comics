import type { Image } from '@/Isekai/Media/Domain/Image'

export class MainBannerCollection {
  protected _title: string
  protected _description: string
  protected _mainImage: Image
  protected _backgroundImage: Image

  constructor(
    name: string,
    metaDescription: string,
    mainImage: Image,
    backgroundImage: Image,
  ) {
    this._title = name
    this._description = metaDescription
    this._backgroundImage = backgroundImage
    this._mainImage = mainImage
  }

  get title(): string {
    return this._title
  }

  get description(): string {
    return this._description
  }

  get backgroundImage(): Image {
    return this._backgroundImage
  }

  get mainImage(): Image {
    return this._mainImage
  }
}
