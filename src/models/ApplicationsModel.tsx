import { Schema,model,models } from "mongoose"

const applicationsSchema = new Schema({
    name:String,
    email:String,
    phoneNumber:String || Number,
    fileLink:{type:String,default:"somelinks"}
},{
    timestamps:true

}) 

const Application = models.Applications || model("Applications",applicationsSchema)
export default Application