import type Post from '../../../Domain/Post'

export class PostViewDTO {
  readonly id: number

  constructor(post: Post) {
    this.id = post.getID()
  }
}
