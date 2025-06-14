import { configureStore } from "@reduxjs/toolkit";
import submenuReducer from "./slices/desktopSubmenuLinksSlice";
import jobsListReducer from "./slices/jobsSlice";



const store = configureStore({
    reducer:{
        submenuReducer:submenuReducer,
        jobsListReducer:jobsListReducer
    }
})

export default store
export type RootStateType = ReturnType<typeof store.getState>
export type dispatchType = typeof store.dispatch