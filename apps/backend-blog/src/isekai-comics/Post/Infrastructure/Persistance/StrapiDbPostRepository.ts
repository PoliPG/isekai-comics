import { EntityService } from '@strapi/strapi'
import Post from '../../Domain/Post'
import { PostRepository } from '../../Domain/PostRepository'
import { PostNotFound } from '../../Domain/errors/PostNotFound'
import { StrapiDbPostMapper } from './StrapiDbPostMapper'
import { inject, injectable } from 'ioc-container'

@injectable()
export class StrapiDbPostRepository implements PostRepository {
  private strapiEntityService: EntityService.EntityService

  constructor(
    @inject('EntityService') strapiEntityService: EntityService.EntityService
  ) {
    this.strapiEntityService = strapiEntityService
  }

  async findOrFail(id: number): Promise<Post> {
    const post = await this.strapiEntityService.findOne('api::post.post', id, {
      populate: { ContentBlocks: true },
    })

    if (post === null) throw PostNotFound.createFromId(id)
    return StrapiDbPostMapper.createFromDB(post)
  }
}
