import type { Category, Collection, Group } from './Group'

export interface GroupRepository {
  findBySlugOrFail(slug: string): Promise<Group>
  getCategories(): Promise<Category[]>
  getCollections(): Promise<Collection[]>
}
