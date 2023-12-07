export class PostNotFound extends Error {

    constructor(message = "Post not found") {
        super(message)
    }

    static createFromId(id: number) {
        return new PostNotFound(`Post ${id} not found`)
    }
}