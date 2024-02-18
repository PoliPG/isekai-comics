import { ContainerModule, type interfaces } from 'ioc-container'
import type { PostRepository } from '@/Isekai/Post/Domain/PostRepository'
import { StrapiPostRepository } from '@/Isekai/Post/Infrastructure/Strapi/StrapiPostRepository'
import TYPES from '../../types'
import PostViewHandler from '@/Isekai/Post/Application/post-view/PostViewHandler'
import GetPostsCommandHandler from '@/Isekai/Post/Application/get-posts/GetPostsCommandHandler'

const PostModule = new ContainerModule(
  (
    bind: interfaces.Bind,
    unbind: interfaces.Unbind,
    isBound: interfaces.IsBound,
    rebind: interfaces.Rebind,
    unbindAsync: interfaces.UnbindAsync,
    onActivation: interfaces.Container['onActivation'],
    onDeactivation: interfaces.Container['onDeactivation'],
  ) => {
    bind<PostRepository>(TYPES.PostRepository)
      .to(StrapiPostRepository)
      .inSingletonScope()
    bind<PostViewHandler>(TYPES.PostViewHandler)
      .to(PostViewHandler)
      .inSingletonScope()
    bind<GetPostsCommandHandler>(TYPES.GetPostHandler)
      .to(GetPostsCommandHandler)
      .inSingletonScope()
  },
)

export default PostModule
