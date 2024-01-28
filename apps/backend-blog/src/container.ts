import { IocContainer } from 'ioc-container'
import { PostRepository } from './isekai-comics/Post/Domain/PostRepository'
import { TYPES } from './isekai-comics/Post/TYPES'
import { StrapiDbPostRepository } from './isekai-comics/Post/Infrastructure/Persistance/StrapiDbPostRepository'

const container = IocContainer.getInstance()
container.bind<PostRepository>(TYPES.PostRepository).to(StrapiDbPostRepository)

export { container }
