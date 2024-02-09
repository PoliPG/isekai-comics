import { ContainerModule, type interfaces } from 'ioc-container'
import TYPES from './types'
import { MessageBus } from 'message-bus'
import StrapiAPI from './Shared/Api/Infrastructure/Strapi/StrapiAPI'
import type { HttpService } from './Shared/Api/Domain/HttpService'

const AppModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<MessageBus>(TYPES.CommandBus).to(MessageBus).inSingletonScope()
  bind<HttpService>(TYPES.BackendApi).toConstantValue(new StrapiAPI())
})

export { AppModule }
