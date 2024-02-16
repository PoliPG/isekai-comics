import { Container } from 'ioc-container'
import { AppModule } from './Infrastructure/modules/AppModule'
import PostModule from './Infrastructure/modules/PostModule'
import { PostConfig } from './Infrastructure/config/PostConfig'

class ContainerDI extends Container {
  private static instance: ContainerDI | null = null

  private constructor() {
    super()
  }

  static getInstance(): ContainerDI {
    if (ContainerDI.instance === null) {
      ContainerDI.instance = new ContainerDI()
      this.init()
    }
    return ContainerDI.instance
  }

  private static init() {
    ContainerDI.instance!.load(PostModule, AppModule)
    PostConfig.init(ContainerDI.instance!)
  }
}

export { ContainerDI }
