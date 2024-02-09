import { ContainerModule, type interfaces } from 'ioc-container'
import type { PostRepository } from '../Domain/PostRepository'
import { StrapiPostRepository } from './Strapi/StrapiPostRepository'
import TYPES from '../types'
import PostViewHandler from '../Application/post-view/PostViewHandler'

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
  },
)

export default PostModule
