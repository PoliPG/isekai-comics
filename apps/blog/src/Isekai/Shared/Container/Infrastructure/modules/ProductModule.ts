import { ContainerModule, type interfaces } from 'ioc-container'
import TYPES from '../../types'
import type { ProductRepository } from '@/Isekai/Product/Domain/ProductRepository'
import { StrapiApiProductRepository } from '@/Isekai/Product/Infrastructure/Api/Strapi/StrapiApiProductRepository'

const ProductModule = new ContainerModule(
  (
    bind: interfaces.Bind,
    unbind: interfaces.Unbind,
    isBound: interfaces.IsBound,
    rebind: interfaces.Rebind,
    unbindAsync: interfaces.UnbindAsync,
    onActivation: interfaces.Container['onActivation'],
    onDeactivation: interfaces.Container['onDeactivation'],
  ) => {
    bind<ProductRepository>(TYPES.ProductRepository)
      .to(StrapiApiProductRepository)
      .inSingletonScope()
  },
)

export default ProductModule
