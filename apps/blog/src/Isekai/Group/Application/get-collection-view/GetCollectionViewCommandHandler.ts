import type { CommandHandler } from '@/Isekai/Shared/Command/CommandHandler'
import types from '@/Isekai/Shared/Container/types'
import { inject, injectable } from 'ioc-container'
import type { GroupRepository } from '../../Domain/GroupRepository'
import { GetCollectionViewCommand } from './GetCollectionViewCommand'
import type { Collection } from '../../Domain/Group'
import { GetCollectionViewDTO } from './DTO/GetCollectionViewDTO'

@injectable()
export class GetCollectionViewCommandHandler
  implements CommandHandler<GetCollectionViewDTO>
{
  constructor(
    @inject(types.GroupRepository) private groupRepository: GroupRepository,
  ) {}

  async handle(
    command: GetCollectionViewCommand,
  ): Promise<GetCollectionViewDTO> {
    try {
      const collection: Collection =
        await this.groupRepository.findBySlugOrFail(command.slug, 'collection')
      return new GetCollectionViewDTO(collection)
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
