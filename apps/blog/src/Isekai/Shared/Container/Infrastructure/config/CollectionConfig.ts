import Types from '../../types'
import type { MessageBus } from 'message-bus'
import { ContainerDI } from '../../ContainerDI'
import type { GetCollectionViewCommandHandler } from '@/Isekai/Collection/Application/get-collection-view/GetCollectionViewCommandHandler'
import { GetCollectionViewCommand } from '@/Isekai/Collection/Application/get-collection-view/GetCollectionViewCommand'

export class CollectionConfig {
  static init(container: ContainerDI) {
    const commandBus = container.get<MessageBus>(Types.CommandBus)
    const getCollectionViewHandler =
      container.get<GetCollectionViewCommandHandler>(
        Types.GetCollectionViewHandler,
      )
    commandBus.register(GetCollectionViewCommand.name, getCollectionViewHandler)
  }
}
