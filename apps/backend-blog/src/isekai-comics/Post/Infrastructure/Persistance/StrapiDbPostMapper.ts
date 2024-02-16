import { BlockPostContent } from '../../Domain/Content/BlockPostContent'
import { IframePostContent } from '../../Domain/Content/IframePostContent'
import { PostContent } from '../../Domain/Content/PostContent'
import Post from '../../Domain/Post'
import { DynamicZoneValue, StrapiDbPost } from './StrapiDbPostRepository'

export class StrapiDbPostMapper {
  static createFromDB(post: StrapiDbPost): Post {
    let contentBlocks: PostContent[] = []
    if (post.contentBlocks)
      contentBlocks = post.contentBlocks.map((contentBlock) => {
        return StrapiDbPostMapper.createContentBlock(contentBlock)
      })

    return new Post(
      post.id as number,
      post.title,
      post.metaTitle,
      post.metaDescription,
      contentBlocks
    )
  }

  private static createContentBlock(
    contentBlock: DynamicZoneValue
  ): PostContent {
    switch (contentBlock.__component) {
      case 'content.content-block':
        return new BlockPostContent(contentBlock.Content ?? '')
      case 'content.iframe-product':
        return new IframePostContent(contentBlock.iframeHtml)
    }
  }
}
