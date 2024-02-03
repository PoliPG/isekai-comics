import type { HookParameters } from 'astro'
import { IocContainer } from 'ioc-container'
import { AppModule } from '../../../../AppModule'
import { PostModule } from '@post/Infrastructure/PostModule'
import { PostConfig } from '@post/PostsConfig'

export default () => ({
  name: 'container-integration',
  hooks: {
    'astro:config:setup': ({}: HookParameters<'astro:config:setup'>) => {
      console.log('integracion container')
      const container = IocContainer.getInstance()
      container.load(PostModule, AppModule)
      PostConfig.init()
      console.log('Container loaded')
    },
  },
})
