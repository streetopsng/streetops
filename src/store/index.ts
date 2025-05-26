import { configureStore } from "@reduxjs/toolkit";
import submenuReducer from "./slices/desktopSubmenuLinksSlice";



const store = configureStore({
    reducer:{
        submenuReducer:submenuReducer
    }
})

export default store
export type RootStateType = ReturnType<typeof store.getState>
export type dispatchType = typeof store.dispatch