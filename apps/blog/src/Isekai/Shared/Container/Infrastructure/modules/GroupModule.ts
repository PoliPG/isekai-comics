import { ContainerModule, type interfaces } from 'ioc-container'
import TYPES from '../../types'
import type { GroupRepository } from '@/Isekai/Group/Domain/GroupRepository'
import { StrapiApiGroupRepository } from '@/Isekai/Group/Infrastructure/Api/Strapi/StrapiApiGroupRepository'
import { GetCollectionViewCommandHandler } from '@/Isekai/Group/Application/get-collection-view/GetCollectionViewCommandHandler'

const GroupModule = new ContainerModule(
  (
    bind: interfaces.Bind,
    unbind: interfaces.Unbind,
    isBound: interfaces.IsBound,
    rebind: interfaces.Rebind,
    unbindAsync: interfaces.UnbindAsync,
    onActivation: interfaces.Container['onActivation'],
    onDeactivation: interfaces.Container['onDeactivation'],
  ) => {
    bind<GroupRepository>(TYPES.GroupRepository)
      .to(StrapiApiGroupRepository)
      .inSingletonScope()
    bind<GetCollectionViewCommandHandler>(TYPES.GetCollectionViewHandler)
      .to(GetCollectionViewCommandHandler)
      .inSingletonScope()
  },
)

export default GroupModule
