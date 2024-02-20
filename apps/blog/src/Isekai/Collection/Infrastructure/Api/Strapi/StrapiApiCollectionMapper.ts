import { Collection } from '@/Isekai/Collection/Domain/Collection'
import type { StrapiApiCollectionDTO } from './StrapiApiCollectionRepository'
import { Image } from '@/Isekai/Media/Domain/Image'

export class StrapiApiCollectionMapper {
  static createFromDB(groupDTO: StrapiApiCollectionDTO): Collection {
    const name = groupDTO.attributes.name
    const slug = groupDTO.attributes.slug
    const metaTitle = groupDTO.attributes.metaTitle
    const metaDescription = groupDTO.attributes.metaDescription
    const backgroundImage = groupDTO.attributes.backgroundImage.data.attributes
    const mainImage = groupDTO.attributes.mainImage.data.attributes
    let parent = null
    if (groupDTO.attributes.parent.data !== null)
      parent = StrapiApiCollectionMapper.createFromDB(
        groupDTO.attributes.parent.data,
      )

    return new Collection(
      name,
      slug,
      parent,
      metaTitle,
      metaDescription,
      new Image(backgroundImage.url, backgroundImage.ext),
      new Image(mainImage.url, mainImage.ext),
    )
  }
}
