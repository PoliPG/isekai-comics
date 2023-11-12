import Post from "../Domain/Post";
import type { PostRepository } from "../Domain/PostRepository";

export class StrapiPostRepository implements PostRepository {
    findOrFail(id: string): Post {
        return new Post(1, "Prueba", "Esto es una prueba")
    }
}