import { Category, Collection, Tag, type Group } from '@/Group/Domain/Group'
import type { StrapiApiGroupDTO } from './StrapiApiGroupRepository'

export class StrapiAPiGroupMapper {
  static createFromDB(groupDTO: StrapiApiGroupDTO): Group {
    const name = groupDTO.attributes.name
    const slug = groupDTO.attributes.slug
    let parent = null
    if (groupDTO.attributes.parent !== null)
      parent = StrapiAPiGroupMapper.createFromDB(groupDTO.attributes.parent)

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
