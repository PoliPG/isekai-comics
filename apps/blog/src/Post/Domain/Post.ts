import type { Image } from '@/Media/Domain/Image'

export default class Post {
  private id: number
  private _image: Image
  private _title: string
  private _metaTitle: string
  private _metaDescription: string
  private _slug: string
  private _content: string
  private _createdAt: Date

  constructor(
    id: number,
    title: string,
    metaTitle: string,
    metaDescription: string,
    slug: string,
    content: string,
    createdAt: Date,
    image: Image,
  ) {
    this.id = id
    this._title = title
    this._metaDescription = metaDescription
    this._metaTitle = metaTitle
    this._slug = slug
    this._content = content
    this._createdAt = createdAt
    this._image = image
  }

  getID(): number {
    return this.id
  }

  get image(): Image {
    return this._image
  }

  get createDate(): Date {
    return this._createdAt
  }

  get title(): string {
    return this._title
  }

  get metaDescription(): string {
    return this._metaDescription
  }

  get metaTitle(): string {
    return this._metaTitle
  }

  get content(): string {
    return this._content
  }

  get slug(): string {
    return this._slug
  }
}
