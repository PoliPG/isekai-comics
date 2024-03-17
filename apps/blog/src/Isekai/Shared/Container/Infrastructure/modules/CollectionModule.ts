import { ContainerModule, type interfaces } from 'ioc-container'
import TYPES from '../../types'
import { GetCollectionViewCommandHandler } from '@/Isekai/Collection/Application/get-collection-view/GetCollectionViewCommandHandler'
import type { CollectionRepository } from '@/Isekai/Collection/Domain/CollectionRepository'
import { StrapiApiCollectionRepository } from '@/Isekai/Collection/Infrastructure/Api/Strapi/StrapiApiCollectionRepository'

const CollectionModule = new ContainerModule(
  (
    bind: interfaces.Bind,
    unbind: interfaces.Unbind,
    isBound: interfaces.IsBound,
    rebind: interfaces.Rebind,
    unbindAsync: interfaces.UnbindAsync,
    onActivation: interfaces.Container['onActivation'],
    onDeactivation: interfaces.Container['onDeactivation'],
  ) => {
    bind<CollectionRepository>(TYPES.CollectionRepository)
      .to(StrapiApiCollectionRepository)
      .inSingletonScope()
    bind<GetCollectionViewCommandHandler>(TYPES.GetCollectionViewHandler)
      .to(GetCollectionViewCommandHandler)
      .inSingletonScope()
  },
)

export default CollectionModule
