import type { Category, Group } from './Group'
export type GroupTypes = 'tag' | 'category'

export interface GroupRepository {
  findBySlugOrFail(slug: string, type: GroupTypes): Promise<Group>
  getCategories(): Promise<Category[]>
}
