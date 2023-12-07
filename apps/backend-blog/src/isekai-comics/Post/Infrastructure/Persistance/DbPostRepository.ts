import { EntityService } from "@strapi/strapi";
import Post from "../../Domain/Post";
import { PostRepository } from "../../Domain/PostRepository";
import { PostNotFound } from "../../Domain/errors/PostNotFound";

export class DbPostRepository implements PostRepository {

    constructor(private strapiEntityService:  EntityService.EntityService){}

    async findOrFail(id: number): Promise<Post> {
       const post =   await this.strapiEntityService.findOne('api::post.post', id, {
            populate: { ContentBlocks: true },
          });

       if(post === null) throw new PostNotFound()
       return new Post(post.id as number, post.MetaTitle, post.MetaDescription)
    }
   
}