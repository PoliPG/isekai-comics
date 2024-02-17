import { Container } from 'ioc-container'
import { AppModule } from './Infrastructure/modules/AppModule'
import PostModule from './Infrastructure/modules/PostModule'
import { PostConfig } from './Infrastructure/config/PostConfig'
import GroupModule from './Infrastructure/modules/GroupModule'

class ContainerDI extends Container {
  private static instance: ContainerDI | null = null

  private constructor() {
    super()
    this.load(PostModule, AppModule, GroupModule)
    PostConfig.init(this)
  }

  static getInstance(): ContainerDI {
    if (ContainerDI.instance === null) {
      ContainerDI.instance = new ContainerDI()
    }
    return ContainerDI.instance
  }
}

export { ContainerDI }
