export class CollectionNotFound extends Error {
  constructor(message: string) {
    super(message)
  }

  static createFromSlug(slug: string): CollectionNotFound {
    return new CollectionNotFound(`Collection with slug: ${slug} not found`)
  }
}
