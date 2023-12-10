import type { Query } from './Query'

export interface QueryHandler<T> {
  handle(query: Query): Promise<T | T[]>
}
