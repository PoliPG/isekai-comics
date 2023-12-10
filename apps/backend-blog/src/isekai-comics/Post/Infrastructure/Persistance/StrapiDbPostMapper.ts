import { BlockPostContent } from '../../Domain/Content/BlockPostContent'
import { IframePostContent } from '../../Domain/Content/IframePostContent'
import { PostContent } from '../../Domain/Content/PostContent'
import Post from '../../Domain/Post'
import { EntityService, Registry, Common, UID, Attribute } from '@strapi/strapi'

export type StrapiDbPost = EntityService.Entity<'api::post.post'>
export type StrapiDbPostContentBlocks = StrapiDbPost['ContentBlocks']
export type ContentComponents = Registry.Keys<
  Common.Schemas,
  UID.Component<'content'>
>
export type DynamicZoneValue = Attribute.GetDynamicZoneValue<
  Attribute.DynamicZone<ContentComponents[]>
>[0]

export class StrapiDbPostMapper {
  static createFromDB(post: StrapiDbPost): Post {
    let contentBlocks: PostContent[] = []
    if (post.ContentBlocks)
      contentBlocks = post.ContentBlocks.map((contentBlock) => {
        return StrapiDbPostMapper.createContentBlock(contentBlock)
      })

    return new Post(
      post.id as number,
      post.Title,
      post.MetaTitle,
      post.MetaDescription,
      contentBlocks,
    )
  }

  private static createContentBlock(
    contentBlock: DynamicZoneValue,
  ): PostContent {
    switch (contentBlock.__component) {
      case 'content.content-block':
        return new BlockPostContent(contentBlock.Content ?? '')
      case 'content.iframe-product':
        return new IframePostContent(contentBlock.iframeHtml)
    }
  }
}
