import type { CommandHandler } from '@/Isekai/Shared/Command/CommandHandler'
import types from '@/Isekai/Shared/Container/types'
import { inject, injectable } from 'ioc-container'
import { GetCollectionViewCommand } from './GetCollectionViewCommand'
import { CollectionViewDTO } from './DTO/GetCollectionViewDTO'
import type { CollectionRepository } from '../../Domain/CollectionRepository'
import type { Collection } from '../../Domain/Collection'
import type { ImageUrlResolver } from '@/Isekai/Media/Domain/ImageUrlResolver'

@injectable()
export class GetCollectionViewCommandHandler
  implements CommandHandler<CollectionViewDTO>
{
  constructor(
    @inject(types.CollectionRepository)
    private collectionRepository: CollectionRepository,
    @inject(types.ImageUrlResolver)
    private imageUrlResolver: ImageUrlResolver,
  ) {}

  async handle(command: GetCollectionViewCommand): Promise<CollectionViewDTO> {
    try {
      const collection: Collection =
        await this.collectionRepository.findBySlugOrFail(command.slug)
      return new CollectionViewDTO(collection, this.imageUrlResolver)
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
