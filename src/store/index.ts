import { configureStore } from "@reduxjs/toolkit";
import submenuReducer from "./slices/desktopSubmenuLinksSlice";
import jobsListReducer from "./slices/jobsSlice";
import servicesTopReducer from "./slices/ServicesTopSlice";
import alljobsReducer from "./slices/allJobsSlice";
import blogsReducer from "./slices/allBlogs";
import modalReducer from "./slices/modalSlice";
import mobileMenuReducer from "./slices/opemMobileMenuSlice";

const store = configureStore({
  reducer: {
    submenuReducer: submenuReducer,
    mobileMenuReducer: mobileMenuReducer,
    jobsListReducer: jobsListReducer,
    servicesTopReducer: servicesTopReducer,
    alljobsReducer: alljobsReducer,
    blogsReducer: blogsReducer,
    modalReducer: modalReducer,
  },
});

export default store;
export type RootStateType = ReturnType<typeof store.getState>;
export type dispatchType = typeof store.dispatch;
