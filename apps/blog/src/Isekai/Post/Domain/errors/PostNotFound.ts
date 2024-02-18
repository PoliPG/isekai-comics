export class PostNotFound extends Error {
  constructor(message = 'Post not found') {
    super(message)
  }

  static createFromId(id: number) {
    return new PostNotFound(`Post ${id} not found`)
  }

  static createFromSlug(slug: string) {
    return new PostNotFound(`Post with slug: ${slug} not found`)
  }
}
