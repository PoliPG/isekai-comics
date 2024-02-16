import type { ImageUrlResolver } from '@/Media/Domain/ImageUrlResolver'
import type Post from '@/Post/Domain/Post'

export class PostViewDTO {
  readonly id: number
  readonly title: string
  readonly metaDescription: string
  readonly metaTitle: string
  readonly content: string
  readonly createdAt: Date
  readonly imageUrl: string

  constructor(post: Post, imageUrlResolver: ImageUrlResolver) {
    this.id = post.getID()
    this.title = post.title
    this.content = post.content
    this.metaDescription = post.metaDescription
    this.metaTitle = post.metaTitle
    this.createdAt = post.createDate
    this.imageUrl = imageUrlResolver.resolve(post.image)
  }
}
