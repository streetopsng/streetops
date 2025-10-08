import { model, models, Schema } from "mongoose";


const waitlistSchema = new Schema({
    email:String,
},{
    timestamps:true
})

export const Waitlist = models.Waitlists || model("Waitlists",waitlistSchema)
