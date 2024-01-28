import 'reflect-metadata'
import { Container, injectable, inject, ContainerModule } from 'inversify'

class IocContainer extends Container {
  private static instance: IocContainer | null = null

  private constructor() {
    super()
  }

  static getInstance() {
    if (IocContainer.instance === null) {
      IocContainer.instance = new IocContainer()
    }
    return IocContainer.instance
  }
}
export * from 'inversify'
export { IocContainer }
