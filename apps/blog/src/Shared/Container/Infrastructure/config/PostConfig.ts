import Types from '../../types'
import PostViewHandler from '../../../../Post/Application/post-view/PostViewHandler'
import type { MessageBus } from 'message-bus'
import { ContainerDI } from '../../ContainerDI'
import type GetPostsCommandHandler from '@/Post/Application/get-posts/GetPostsCommandHandler'
import { PostViewCommand } from '@/Post/Application/post-view/PostViewCommand'
import GetPostsCommand from '@/Post/Application/get-posts/GetPostsCommand'

export class PostConfig {
  static init(container: ContainerDI) {
    const commandBus = container.get<MessageBus>(Types.CommandBus)

    const postViewHandler = container.get<PostViewHandler>(
      Types.PostViewHandler,
    )
    const getPostsHandler = container.get<GetPostsCommandHandler>(
      Types.GetPostHandler,
    )
    commandBus.register(PostViewCommand.name, postViewHandler)
    commandBus.register(GetPostsCommand.name, getPostsHandler)
  }
}
