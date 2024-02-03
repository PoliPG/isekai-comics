import { ContainerModule, type interfaces } from 'ioc-container'
import TYPES from './types'
import { MessageBus } from 'message-bus'

const AppModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<MessageBus>(TYPES.CommandBus).to(MessageBus).inSingletonScope()
  bind<MessageBus>(TYPES.EventBus).to(MessageBus).inSingletonScope()
})

export { AppModule }
