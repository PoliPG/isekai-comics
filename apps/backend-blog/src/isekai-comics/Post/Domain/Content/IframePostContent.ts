import { PostContent } from "./PostContent";

export class IframePostContent implements PostContent {

    private iframe: string

    constructor(iframe: string) {
        this.iframe = iframe
    }

    getContent(): string {
        return this.iframe
    }
}