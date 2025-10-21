import { Action, createSlice, PayloadAction} from "@reduxjs/toolkit";


const modalSlice = createSlice({
    name:"modal",
    initialState:{
        isOpen:true,
        content:"your email has been added to the successfully waitlist "
    },
    reducers:{
      openModal:(state,actions:PayloadAction<string>)=>{
        return {
            isOpen:true,
            content:actions.payload
        }
      },
      closeModal:()=>{
        return {
            isOpen:false,
            content:""
        }
      }
    }
})

export const {openModal,closeModal} = modalSlice.actions
 const modalReducer = modalSlice.reducer

 export default modalReducer