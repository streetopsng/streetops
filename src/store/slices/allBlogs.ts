import { createSlice, PayloadAction } from "@reduxjs/toolkit";

 export interface blogPostType {
    _id: string;
    title: string;
    content: string;
    imageUrl: string;
    date: string; 
    createdAt: string; 
    updatedAt: string; 
    __v: number;
  }
  const initialState: blogPostType[] | [] = []
  
const blogSlice = createSlice({
    name:"blogSlice",
    initialState,
    reducers:{
        storeBlogs:(state,actions:PayloadAction<any[]>)=>{
return actions.payload
        }
    }
})

export const {storeBlogs} = blogSlice.actions

const blogsReducer = blogSlice.reducer

export default blogsReducer