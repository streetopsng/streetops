import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const formModalSlice = createSlice({
  name: "formModal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openModal: () => {
      return {
        isOpen: true,
      };
    },
    closeModal: () => {
      return {
        isOpen: false,
      };
    },
  },
});

export const { openModal, closeModal } = formModalSlice.actions;
const formModalReducer = formModalSlice.reducer;

export default formModalReducer;
