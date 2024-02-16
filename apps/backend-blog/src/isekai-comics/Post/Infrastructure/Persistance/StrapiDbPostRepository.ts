import Post from '../../Domain/Post'
import { PostRepository } from '../../Domain/PostRepository'
import { PostNotFound } from '../../Domain/errors/PostNotFound'
import { StrapiDbPostMapper } from './StrapiDbPostMapper'
import { inject, injectable } from 'ioc-container'
import { EntityService, Registry, Common, UID, Attribute } from '@strapi/strapi'

export type StrapiDbPost = EntityService.Entity<'api::post.post'>
export type StrapiDbPostContentBlocks = StrapiDbPost['contentBlocks']
export type ContentComponents = Registry.Keys<
  Common.Schemas,
  UID.Component<'content'>
>
export type DynamicZoneValue = Attribute.GetDynamicZoneValue<
  Attribute.DynamicZone<ContentComponents[]>
>[0]

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
      populate: { contentBlocks: true, image: true },
    })

    if (post === null) throw PostNotFound.createFromId(id)
    return StrapiDbPostMapper.createFromDB(post)
  }
}
