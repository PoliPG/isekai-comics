export class ParentCollection {
  protected _name: string
  protected _slug: string

  constructor(name: string, slug: string) {
    this._name = name
    this._slug = slug
  }

  get name(): string {
    return this._name
  }

  get slug(): string {
    return this._slug
  }
}
