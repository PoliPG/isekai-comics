export class ProductCollection {
  private _id: number
  private _name: string
  private _slug: string

  constructor(id: number, name: string, slug: string) {
    this._id = id
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
