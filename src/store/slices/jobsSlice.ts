import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const jobsListSlice = createSlice({
    name:"Jobs",
    initialState:null,
    reducers:{
        addFetchedJobs:(state,actions:PayloadAction<any>)=>{
            return actions.payload
        }
    }
})

export const {addFetchedJobs} = jobsListSlice.actions
 const jobsListReducer = jobsListSlice.reducer

 export default jobsListReducer