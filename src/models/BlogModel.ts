import { model, models, Schema } from "mongoose";



const blogSchema = new Schema({
    title:String,
    content:String,
    imageUrl:String,
    date:String,
    
},{
    timestamps:true
})

const Blog = models.Blogs || model("Blogs",blogSchema)

export default Blog