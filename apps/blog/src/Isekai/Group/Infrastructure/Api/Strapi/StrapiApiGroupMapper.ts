import {
  Category,
  Collection,
  Tag,
  type Group,
} from '@/Isekai/Group/Domain/Group'
import type { StrapiApiGroupDTO } from './StrapiApiGroupRepository'

export class StrapiAPiGroupMapper {
  static createFromDB(groupDTO: StrapiApiGroupDTO): Group {
    const name = groupDTO.attributes.name
    const slug = groupDTO.attributes.slug
    let parent = null
    if (groupDTO.attributes.parent.data !== null)
      parent = StrapiAPiGroupMapper.createFromDB(
        groupDTO.attributes.parent.data,
      )

    switch (groupDTO.attributes.type) {
      case 'category':
        return new Category(name, slug, parent)
      case 'collection':
        return new Collection(name, slug, parent)
      case 'tag':
        return new Tag(name, slug, parent)
    }
  }
}
