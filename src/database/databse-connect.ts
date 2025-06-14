import mongoose from "mongoose"



export const connectDatabase = async()=>{
const connectionString = process.env.MONGO_URL
    if (!connectionString) {
        throw new Error ("couldn't find the database url")
    }
   try {
   const res =  await mongoose.connect(process.env.MONGO_URL as string,{
    dbName:"paige_db"
   })
        
console.log("db connected successfully");
return {success:true}

   } catch (error) {
    console.log("something went wrong,could not connect");
    // throw new Error("something went wrong,could not connec")  
    return {success:false}
   }


}