import type { HookParameters } from 'astro'
import { IocContainer, decorate, injectable } from 'ioc-container'
import { AppModule } from '../../../../AppModule'
import PostModule from '../../../../Post/Infrastructure/PostModule'
import { PostConfig } from '../../../../Post/PostsConfig'
import { MessageBus } from 'message-bus'

export default () => ({
  name: 'container-integration',
  hooks: {
    'astro:config:setup': ({}: HookParameters<'astro:config:setup'>) => {
      console.log('integracion container')
      const container = IocContainer.getInstance()
      decorate(injectable(), MessageBus)
      container.load(PostModule, AppModule)
      PostConfig.init()
      console.log('Container loaded')
    },
  },
})
