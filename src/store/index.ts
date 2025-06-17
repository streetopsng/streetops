import { configureStore } from "@reduxjs/toolkit";
import submenuReducer from "./slices/desktopSubmenuLinksSlice";
import jobsListReducer from "./slices/jobsSlice";
import servicesTopReducer from "./slices/ServicesTopSlice";
import alljobsReducer from "./slices/allJobsSlice";



const store = configureStore({
    reducer:{
        submenuReducer:submenuReducer,
        jobsListReducer:jobsListReducer,
        servicesTopReducer:servicesTopReducer,
        alljobsReducer:alljobsReducer
    }
})

export default store
export type RootStateType = ReturnType<typeof store.getState>
export type dispatchType = typeof store.dispatch