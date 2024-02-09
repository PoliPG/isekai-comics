import { IocContainer } from 'ioc-container'
import PostModule from '../../../../Post/Infrastructure/PostModule'
import { AppModule } from '../../../../AppModule'
import { PostConfig } from '../../../../Post/PostsConfig'

/**
 * @type {import('astro').DevToolbarApp}
 */
export default {
  id: 'container-plugin',
  name: 'Container Astro Plugin',
  icon: 'astro:logo',
  init() {
    const container = IocContainer.getInstance()
    container.load(PostModule, AppModule)
    PostConfig.init()
    console.log('Container loaded')
  },
}
