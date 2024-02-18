import type { Category, Collection, Group } from './Group'
export type GroupTypes = 'collection' | 'tag' | 'category'

export interface GroupRepository {
  findBySlugOrFail(slug: string, type: GroupTypes): Promise<Group>
  getCategories(): Promise<Category[]>
  getCollections(): Promise<Collection[]>
}
