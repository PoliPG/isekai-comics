import { IocContainer } from 'ioc-container'
import { PostRepository } from '../../../isekai-comics/Post/Domain/PostRepository'
import { TYPES } from '../../../isekai-comics/Post/TYPES'

export default {
  async afterUpdate(event) {
    let { data, where, select, populate } = event.params
    const container = IocContainer.getInstance()
    container.get<PostRepository>(TYPES.PostRepository)
    console.log(data)
  },
}
