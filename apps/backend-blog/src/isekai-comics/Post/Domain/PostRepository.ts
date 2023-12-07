import Post from "./Post";

export interface PostRepository {
    findOrFail(id: number): Promise<Post>
}