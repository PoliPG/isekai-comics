export class Image {
  private _url: string
  private _ext: string

  constructor(url: string, ext: string) {
    this._ext = ext
    this._url = url
  }

  get url(): string {
    return this._url
  }

  get ext(): string {
    return this._ext
  }
}
