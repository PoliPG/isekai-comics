import { Category, Tag, type Group } from '@/Isekai/Group/Domain/Group'
import type { StrapiApiGroupDTO } from './StrapiApiGroupRepository'

export class StrapiAPiGroupMapper {
  static createFromDB(groupDTO: StrapiApiGroupDTO): Group {
    const name = groupDTO.attributes.name
    const slug = groupDTO.attributes.slug
    const metaTitle = groupDTO.attributes.Seo?.metaTitle ?? ''
    const metaDescription = groupDTO.attributes.Seo?.metaDescription ?? ''
    const parentObj = groupDTO.attributes.parent
    let parent = null
    if (parentObj && parentObj.data !== null)
      parent = StrapiAPiGroupMapper.createFromDB(parentObj.data)

    switch (groupDTO.attributes.type) {
      case 'category':
        return new Category(name, slug, parent, metaTitle, metaDescription)
      case 'tag':
        return new Tag(name, slug, parent, metaTitle, metaDescription)
    }
  }
}
