import type Post from '../../../Domain/Post'

export class PostViewDTO {
  readonly id: number
  readonly title: string
  readonly metaDescription: string
  readonly metaTitle: string
  readonly content: string
  readonly createdAt: Date

  constructor(post: Post) {
    this.id = post.getID()
    this.title = post.title
    this.content = post.content
    this.metaDescription = post.metaDescription
    this.metaTitle = post.metaTitle
    this.createdAt = post.createDate
  }
}
