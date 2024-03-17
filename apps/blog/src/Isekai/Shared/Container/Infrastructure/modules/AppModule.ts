import {
  ContainerModule,
  decorate,
  injectable,
  type interfaces,
} from 'ioc-container'
import TYPES from '../../types'
import { MessageBus } from 'message-bus'
import StrapiAPI from '../../../Api/Infrastructure/Strapi/StrapiAPI'
import type { HttpService } from '../../../Api/Domain/HttpService'
import type { ImageUrlResolver } from '@/Isekai/Media/Domain/ImageUrlResolver'
import { StrapiImageUrlResolver } from '@/Isekai/Media/Infrastructure/StrapiUploadUrlResolver'

const AppModule = new ContainerModule((bind: interfaces.Bind) => {
  decorate(injectable(), MessageBus)
  bind<MessageBus>(TYPES.CommandBus).to(MessageBus).inSingletonScope()
  bind<HttpService>(TYPES.BackendApi).toConstantValue(new StrapiAPI())
  bind<ImageUrlResolver>(TYPES.ImageUrlResolver).toConstantValue(
    new StrapiImageUrlResolver(),
  )
})

export { AppModule }
