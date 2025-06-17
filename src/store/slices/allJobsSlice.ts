import { allJobsType } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: allJobsType[] = []
const allJobsSlice = createSlice({
    name:"all jobs Slice",
    initialState:initialState,
    reducers:{
        getFetchedJobs:(state,actions:PayloadAction)=>{

            return actions.payload
        }
    }
})

export const {getFetchedJobs} = allJobsSlice.actions

const alljobsReducer =  allJobsSlice.reducer
export default alljobsReducer