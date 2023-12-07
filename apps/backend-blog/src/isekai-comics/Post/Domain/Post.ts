export default class Post {

    private id: number
    private metaTitle: string
    private metaDescription: string

    constructor(
         id: number,
         metaTitle: string,
         metaDescription: string
    ) {
        this.id = id
        this.metaDescription = metaDescription
        this.metaTitle = metaTitle
    }
}