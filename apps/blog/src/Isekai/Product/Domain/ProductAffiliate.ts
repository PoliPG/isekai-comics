export abstract class ProductAffiliate {
  protected _link: string

  constructor(link: string) {
    this._link = link
  }

  abstract getLink(): string
}

export class AmazonProductAffiliate extends ProductAffiliate {
  getLink(): string {
    return this._link
  }
}
