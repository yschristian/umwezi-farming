import { createSlice } from "@reduxjs/toolkit";

const partnerSlice = createSlice({
    name:"partner",
    initialState:{
        partners:[],
        isFetching: false,
        error: false
    },
    reducers:{
        addPartnerStart:(state)=>{
            state.isFetching = true;
            state.error = false
        },
        addPartnerSuccess:(state,action)=>{
            state.isFetching = false;
            state.products.push(action.payload)
        },
        addPartnerFailure:(state) =>{
            state.isFetching = false;
            state.error = true 
    }
}
})
export const { addPartnerStart, addPartnerSuccess, addPartnerFailure } = partnerSlice.actions
export default partnerSlice.reducer
