import type { Image } from '@/Isekai/Media/Domain/Image'

export class PostAuthor {
  private _name: string
  private _image: Image
  private _jobTitle: string

  constructor(name: string, image: Image, jobTitle: string) {
    this._name = name
    this._image = image
    this._jobTitle = jobTitle
  }

  get name(): string {
    return this._name
  }

  get image(): Image {
    return this._image
  }

  get jobTitle(): string {
    return this._jobTitle
  }
}
