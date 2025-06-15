import { typeServicesStateType } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:typeServicesStateType = {
    workflowAutomation:0,
    recruitment:0,
    trainingAndDevelopment:0,
    worklifeIntegrationConsulting:0

}

const servicesTopSlice = createSlice({
name:"servicesTop",
initialState,
reducers:{
updateTop:(state:typeServicesStateType,actions:PayloadAction<typeServicesStateType>)=>{
    return actions.payload
}
}
})

export const {updateTop} = servicesTopSlice.actions
const servicesTopReducer = servicesTopSlice.reducer
export default servicesTopReducer