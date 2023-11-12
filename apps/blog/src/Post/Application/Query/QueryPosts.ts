export class QueryPosts implements Query {
    readonly id: number

    constructor(id: number) {
        this.id = id
    }
}