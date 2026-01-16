import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";

const mobileMenuSlice = createSlice({
  name: "modal",
  initialState: false,
  reducers: {
    openMobileMenu: () => {
      return true;
    },
    closeMobileMenu: () => {
      return false;
    },
  },
});

export const { openMobileMenu, closeMobileMenu } = mobileMenuSlice.actions;
const mobileMenuReducer = mobileMenuSlice.reducer;

export default mobileMenuReducer;
