import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState ,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state,actiom){
      return state.filter((item) => item.id !== actiom.payload)
    }
  }
});

export const { add , remove } = cartSlice.actions;
export default cartSlice.reducer;
