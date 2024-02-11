import Types from '../../types'
import PostViewHandler from '../../../../Post/Application/post-view/PostViewHandler'
import type { MessageBus } from 'message-bus'
import { ContainerDI } from '../../ContainerDI'

export class PostConfig {
  static init(container: ContainerDI) {
    const commandBus = container.get<MessageBus>(Types.CommandBus)
    const postViewHandler = container.get<PostViewHandler>(
      Types.PostViewHandler,
    )

    commandBus.register('PostViewCommand', postViewHandler)
  }
}
