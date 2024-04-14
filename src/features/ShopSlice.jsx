import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const ShopSlice = createSlice({
    name : 'ShopSlice',
    initialState,
    reducer:{
        add(state,action){
            state.push(action.payload)
        }
    }
})

export const {add} = ShopSlice.actions

export default ShopSlice.reducer