import type { Query } from '../../../Shared/Query/Query'

export class FindPost implements Query {
  readonly id: number

  constructor(id: number) {
    this.id = id
  }
}
