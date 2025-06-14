import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type initialStateStateType = {
    
// }
const initialState = {
    open:false,
    left:0,
    subLinks:[]
}
const submenuSlice = createSlice({
    name:"submenu Slice",
    initialState,
    reducers:{
        openSubmenu:(initialState,actions:PayloadAction<any>)=>{
const getItems = actions.payload.subLinkList
            return {
                open:true,
                left:actions.payload.left,
                subLinks:getItems.length > 0 ? getItems : []

            }
        },
        closeSubmenu:()=>{

            return  {
                open:false,
                left:0,
                subLinks:[]
            }
        }
    }
})

export const {openSubmenu,closeSubmenu} = submenuSlice.actions
const submenuReducer = submenuSlice.reducer

export default submenuReducer