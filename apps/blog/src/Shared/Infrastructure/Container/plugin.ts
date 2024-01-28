import { IocContainer } from 'ioc-container'
import { PostModule } from 'src/Post/Infrastructure/PostModule'

/**
 * @type {import('astro').DevToolbarApp}
 */
export default {
  id: 'container-plugin',
  name: 'Container Astro Plugin',
  icon: 'astro:logo',
  init() {
    const container = IocContainer.getInstance()
    container.load(PostModule)
    console.log('Container loaded')
  },
}
