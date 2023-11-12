import type { Query } from "src/Shared/Application/Query/Query"

export class FindPost implements Query {
    readonly id: number

    constructor(id: number) {
        this.id = id
    }
}