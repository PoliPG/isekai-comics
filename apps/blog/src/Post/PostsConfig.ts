import { IocContainer } from 'ioc-container'
import Types from '../types'
import PostTypes from './types'
import PostViewHandler from './Application/post-view/PostViewHandler'
import type { MessageBus } from 'message-bus'

export class PostConfig {
  static init() {
    const container = IocContainer.getInstance()
    const commandBus = container.get<MessageBus>(Types.CommandBus)
    const postViewHandler = container.get<PostViewHandler>(
      PostTypes.PostViewHandler,
    )

    commandBus.register('PostViewCommand', postViewHandler)
  }
}
