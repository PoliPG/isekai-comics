import { Tag } from '@/Isekai/Group/Domain/Group'
import type { ImageUrlResolver } from '@/Isekai/Media/Domain/ImageUrlResolver'
import type Post from '@/Isekai/Post/Domain/Post'

export class PostViewDTO {
  readonly id: number
  readonly title: string
  readonly metaDescription: string
  readonly metaTitle: string
  readonly content: string
  readonly createdAt: Date
  readonly imageUrl: string
  readonly author: { name: string; jobTitle: string; photo: string }
  readonly tags: { name: string; slug: string }[]

  constructor(post: Post, imageUrlResolver: ImageUrlResolver) {
    this.id = post.getID()
    this.title = post.title
    this.content = post.content
    this.metaDescription = post.metaDescription
    this.metaTitle = post.metaTitle
    this.createdAt = post.createDate
    this.imageUrl = imageUrlResolver.resolve(post.image)
    this.author = {
      name: post.author.name,
      jobTitle: post.author.jobTitle,
      photo: imageUrlResolver.resolve(post.author.image),
    }
    this.tags = post.groups
      .filter((group) => group instanceof Tag)
      .map((tag) => {
        return { name: tag.name, slug: tag.slug }
      })
  }
}
