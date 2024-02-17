export abstract class Group {
  protected _name: string
  protected _slug: string
  protected _parent: Group | null

  constructor(name: string, slug: string, parent: Group | null) {
    this._name = name
    this._slug = slug
    this._parent = parent
  }
}

export class Collection extends Group {}
export class Tag extends Group {}
export class Category extends Group {}
