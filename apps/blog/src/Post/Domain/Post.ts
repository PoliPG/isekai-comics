export default class Post {
  private id: number
  private _title: string
  private _metaTitle: string
  private _metaDescription: string

  constructor(
    id: number,
    title: string,
    metaTitle: string,
    metaDescription: string,
  ) {
    this.id = id
    this._title = title
    this._metaDescription = metaDescription
    this._metaTitle = metaTitle
  }

  getID(): number {
    return this.id
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
}
