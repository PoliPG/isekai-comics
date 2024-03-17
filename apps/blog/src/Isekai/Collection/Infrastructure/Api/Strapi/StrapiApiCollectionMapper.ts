import { Collection } from '@/Isekai/Collection/Domain/Collection'
import type {
  StrapiApiCollectionDTO,
  StrapiApiCollectionMainBannerDTO,
} from './StrapiApiCollectionRepository'
import { Image } from '@/Isekai/Media/Domain/Image'
import { MainBannerCollection } from '@/Isekai/Collection/Domain/MainBannerCollection'
import { ChildrenCollection } from '@/Isekai/Collection/Domain/ChildrenCollection'
import { ParentCollection } from '@/Isekai/Collection/Domain/ParentCollection'

export class StrapiApiCollectionMapper {
  static createFromDB(
    collectionDTO: StrapiApiCollectionDTO,
    withParent: boolean = true,
    withChildren: boolean = true,
  ): Collection {
    const dataCollection = collectionDTO.attributes
    const id = collectionDTO.id
    const name = dataCollection.name
    const slug = dataCollection.slug
    const metaTitle = dataCollection.metaTitle
    const metaDescription = dataCollection.metaDescription
    const mainImage = dataCollection.mainImage!.data.attributes
    const mainBanner = dataCollection.mainBanner

    let parent = null
    if (
      withParent &&
      dataCollection.parent &&
      dataCollection.parent.data !== null
    )
      parent = new ParentCollection(
        dataCollection.parent.data.attributes.name,
        dataCollection.parent.data.attributes.slug,
      )

    let children: ChildrenCollection[] = []
    if (withChildren && dataCollection.children)
      children = this.createChildren(dataCollection.children.data)

    return new Collection(
      id,
      name,
      slug,
      parent,
      metaTitle,
      metaDescription,
      new Image(mainImage.url, mainImage.ext),
      this.createMainBanner(mainBanner!),
      children,
    )
  }

  private static createMainBanner(
    mainBanner: StrapiApiCollectionMainBannerDTO,
  ): MainBannerCollection {
    return new MainBannerCollection(
      mainBanner!.title,
      mainBanner!.description,
      new Image(
        mainBanner!.mainImage.data.attributes.url,
        mainBanner!.mainImage.data.attributes.ext,
      ),
      new Image(
        mainBanner!.backgroundImage.data.attributes.url,
        mainBanner!.backgroundImage.data.attributes.ext,
      ),
    )
  }

  private static createChildren(
    childrenDTO: StrapiApiCollectionDTO[],
  ): ChildrenCollection[] {
    return childrenDTO.map(
      (dto) =>
        new ChildrenCollection(
          dto.attributes.name,
          dto.attributes.slug,
          new Image(
            dto.attributes.mainImage?.data.attributes.url ?? '',
            dto.attributes.mainImage?.data.attributes.ext ?? '',
          ),
        ),
    )
  }
}
