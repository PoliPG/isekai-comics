import type { Collection } from './Collection'

export interface CollectionRepository {
  findBySlugOrFail(slug: string): Promise<Collection>
}
