import Post from "src/Post/Domain/Post";
import type { FindPost } from "./FindPost";
import type { QueryHandler } from "src/Shared/Application/Query/QueryHandler";

export class QueryPostsHandler implements QueryHandler<Post> {

    constructor() {}

    async handle(find: FindPost): Promise<Post> {
        return new Post(1, "Hola", "Caracola")
    }
}