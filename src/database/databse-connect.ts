// import mongoose from "mongoose"



// export const connectDatabase = async()=>{
// const connectionString = process.env.MONGO_URL
//     if (!connectionString) {
//         throw new Error ("couldn't find the database url")
//     }
//    try {
//    const res =  await mongoose.connect(process.env.MONGO_URL as string,{
//     dbName:"paige_db"
//    })
        
// console.log("db connected successfully");
// return {success:true}

//    } catch (error) {
//     console.log("something went wrong,could not connect");
//     // throw new Error("something went wrong,could not connec")  
//     return {success:false}
//    }


// }





// TEST THIS OUT


// lib/connectDatabase.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGO_URL as string;

if (!MONGODB_URI) {
  throw new Error('MONGO_URL is not defined in environment variables');
}

// Global cache to persist connection across hot reloads
let cached = (global as any)._mongoose as {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

if (!cached) {
  cached = (global as any)._mongoose = { conn: null, promise: null };
}

export async function connectDatabase(): Promise<{ success: boolean }> {
  if (cached.conn) {
    return { success: true }; // ✅ Already connected
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'blogs_db',
      bufferCommands: false,
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log('✅ MongoDB connected successfully');
    return { success: true };
  } catch (err) {
    cached.promise = null; // Clear promise so we can retry next time
    console.error(' MongoDB connection failed:', err);
    return { success: false };
  }
}
