export abstract class Group {
  protected _name: string
  protected _slug: string
  protected _parent: Group | null
  protected _metaDescription: string
  protected __metaTitle: string

  constructor(
    name: string,
    slug: string,
    parent: Group | null,
    metaTitle: string,
    metaDescription: string,
  ) {
    this._name = name
    this._slug = slug
    this._parent = parent
    this._metaDescription = metaDescription
    this.__metaTitle = metaTitle
  }

  get name(): string {
    return this._name
  }

  get metaDescription(): string {
    return this._metaDescription
  }

  get metaTitle(): string {
    return this.__metaTitle
  }
}

export class Collection extends Group {}
export class Tag extends Group {}
export class Category extends Group {}
