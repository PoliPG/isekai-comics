import { Collection } from '@/Isekai/Collection/Domain/Collection'
import type { StrapiApiCollectionDTO } from './StrapiApiCollectionRepository'
import { Image } from '@/Isekai/Media/Domain/Image'
import { MainBannerCollection } from '@/Isekai/Collection/Domain/MainBannerCollection'

export class StrapiApiCollectionMapper {
  static createFromDB(collectionDTO: StrapiApiCollectionDTO): Collection {
    const dataCollection = collectionDTO.attributes
    const name = dataCollection.name
    const slug = dataCollection.slug
    const metaTitle = dataCollection.metaTitle
    const metaDescription = dataCollection.metaDescription
    const mainImage = dataCollection.mainImage.data.attributes
    const mainBanner = dataCollection.mainBanner
    let parent = null
    if (dataCollection.parent.data !== null)
      parent = StrapiApiCollectionMapper.createFromDB(
        dataCollection.parent.data,
      )

    return new Collection(
      name,
      slug,
      parent,
      metaTitle,
      metaDescription,
      new Image(mainImage.url, mainImage.ext),
      new MainBannerCollection(
        mainBanner.title,
        mainBanner.description,
        new Image(
          mainBanner.mainImage.data.attributes.url,
          mainBanner.mainImage.data.attributes.ext,
        ),
        new Image(
          mainBanner.backgroundImage.data.attributes.url,
          mainBanner.backgroundImage.data.attributes.ext,
        ),
      ),
    )
  }
}
