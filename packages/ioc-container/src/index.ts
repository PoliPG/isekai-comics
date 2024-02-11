import 'reflect-metadata'
import { Container } from 'inversify'

class IocContainer extends Container {
  private static instance: IocContainer | null = null

  constructor() {
    super()
  }

  static getInstance(): IocContainer {
    if (IocContainer.instance !== null) return IocContainer.instance
    console.log('NEW CONTAINER ---------------------------------- ')
    IocContainer.instance = new IocContainer()
    return IocContainer.instance
  }
}
export * from 'inversify'
export { IocContainer }
