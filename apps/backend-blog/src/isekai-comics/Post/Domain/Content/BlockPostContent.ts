import { PostContent } from "./PostContent";

export class BlockPostContent implements PostContent {

    private block: string

    constructor(block: string) {
        this.block = block
    }

    getContent(): string {
        return this.block
    }
}