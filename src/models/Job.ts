import { Schema,model,models } from "mongoose";

const JobSchema = new Schema({
    jobTitle:String,
    aboutJob:String,
    roleOverview:String,
    workPlace:{type:String,default:"Remote"},
    responsibilities:{
        type:[Schema.Types.Mixed],
        default:[]
    },
    requirements:{
        type:[String || null],
        default:[]
    }
},{
    timestamps:true
})

const Job = models.jobs || model("Jobs",JobSchema)

export default Job