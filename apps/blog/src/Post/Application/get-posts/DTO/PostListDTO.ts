import type { ImageUrlResolver } from '@/Media/Domain/ImageUrlResolver'
import type Post from '@/Post/Domain/Post'

export class PostListDTO {
  readonly id: number
  readonly title: string
  readonly slug: string
  readonly createdAt: Date
  readonly imageUrl: string

  constructor(post: Post, imageResolver: ImageUrlResolver) {
    this.id = post.getID()
    this.title = post.title
    this.slug = post.slug
    this.createdAt = post.createDate
    this.imageUrl = imageResolver.resolve(post.image)
  }
}
