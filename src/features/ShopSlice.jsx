import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data : []
}

export const ShopSlice = createSlice({
    name : 'ShopSlice',
    initialState,
    reducer:{
        fetchProducts(state,action){
            state.data = action.payload;
        }
    },
    extraReducers: (builder ) => {
        builder
        .addCase(getProducts.fulfilled,(state,action) => {
            state.data = action.payload;
        })
    }
})

export const {fetchProducts} = ShopSlice.actions

export default ShopSlice.reducer

export const getProducts = createAsyncThunk(
    'products/get',
    async() => {
        const response = await axios.get("https://fakestoreapi.com/products")
        return response.data
    }
)