export class GroupNotFound extends Error {
  constructor(message: string) {
    super(message)
  }

  static createFromSlug(slug: string): GroupNotFound {
    return new GroupNotFound(`Group with slug: ${slug} not found`)
  }
}
