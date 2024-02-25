import { Container } from 'ioc-container'
import { AppModule } from './Infrastructure/modules/AppModule'
import PostModule from './Infrastructure/modules/PostModule'
import { PostConfig } from './Infrastructure/config/PostConfig'
import GroupModule from './Infrastructure/modules/GroupModule'
import CollectionModule from './Infrastructure/modules/CollectionModule'
import { CollectionConfig } from './Infrastructure/config/CollectionConfig'
import ProductModule from './Infrastructure/modules/ProductModule'

class ContainerDI extends Container {
  private static instance: ContainerDI | null = null

  private constructor() {
    super()
    this.load(
      PostModule,
      AppModule,
      GroupModule,
      CollectionModule,
      ProductModule,
    )
    PostConfig.init(this)
    CollectionConfig.init(this)
  }

  static getInstance(): ContainerDI {
    if (ContainerDI.instance === null) {
      ContainerDI.instance = new ContainerDI()
    }
    return ContainerDI.instance
  }
}

export { ContainerDI }
