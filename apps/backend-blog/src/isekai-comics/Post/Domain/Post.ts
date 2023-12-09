import { PostContent } from "./Content/PostContent"

export default class Post {

    private id: number
    private title: string
    private metaTitle: string
    private metaDescription: string
    private content: PostContent[]

    constructor(
         id: number,
         title: string,
         metaTitle: string,
         metaDescription: string,
         content: PostContent[]
    ) {
        this.id = id
        this.title = title
        this.metaDescription = metaDescription
        this.metaTitle = metaTitle
        this.content = content
    }

    getContent(): string {
        const contentInBlocks: string[] = this.content.map((contentBlock) => contentBlock.getContent())
        return contentInBlocks.join()
    }
}