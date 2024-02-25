import type { Image } from '@/Isekai/Media/Domain/Image'
import type { MainBannerCollection } from './MainBannerCollection'
import type { ChildrenCollection } from './ChildrenCollection'
import type { ParentCollection } from './ParentCollection'

export class Collection {
  protected _id: number
  protected _name: string
  protected _slug: string
  protected _parent: ParentCollection | null
  protected _metaDescription: string
  protected _metaTitle: string
  protected _mainImage: Image
  protected _mainBanner: MainBannerCollection
  protected _children: ChildrenCollection[]

  constructor(
    id: number,
    name: string,
    slug: string,
    parent: ParentCollection | null,
    metaTitle: string,
    metaDescription: string,
    mainImage: Image,
    mainBanner: MainBannerCollection,
    children?: ChildrenCollection[],
  ) {
    this._id = id
    this._name = name
    this._slug = slug
    this._parent = parent
    this._metaDescription = metaDescription
    this._metaTitle = metaTitle
    this._mainBanner = mainBanner
    this._mainImage = mainImage
    this._children = children ?? []
  }

  get id(): number {
    return this._id
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

  get children(): ChildrenCollection[] {
    return this._children
  }

  get parent(): ParentCollection | null {
    return this._parent
  }

  get mainImage(): Image {
    return this._mainImage
  }
}
