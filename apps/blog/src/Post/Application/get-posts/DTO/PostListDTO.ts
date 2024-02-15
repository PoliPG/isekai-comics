import type Post from '@/Post/Domain/Post'

export class PostListDTO {
  readonly id: number
  readonly title: string
  readonly slug: string
  readonly createdAt: Date

  constructor(post: Post) {
    this.id = post.getID()
    this.title = post.title
    this.slug = post.slug
    this.createdAt = post.createDate
  }
}
