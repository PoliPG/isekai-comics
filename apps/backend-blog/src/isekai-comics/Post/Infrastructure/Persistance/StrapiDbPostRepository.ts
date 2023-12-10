import { EntityService } from '@strapi/strapi'
import Post from '../../Domain/Post'
import { PostRepository } from '../../Domain/PostRepository'
import { PostNotFound } from '../../Domain/errors/PostNotFound'
import { StrapiDbPostMapper } from './StrapiDbPostMapper'

export class StrapiDbPostRepository implements PostRepository {
  constructor(private strapiEntityService: EntityService.EntityService) {}

  async findOrFail(id: number): Promise<Post> {
    const post = await this.strapiEntityService.findOne('api::post.post', id, {
      populate: { ContentBlocks: true },
    })

    if (post === null) throw PostNotFound.createFromId(id)
    return StrapiDbPostMapper.createFromDB(post)
  }
}
