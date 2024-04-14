import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data : [],
    status: 'idle'
}

export const ShopSlice = createSlice({
    name : 'ShopSlice',
    initialState,
    reducer:{},
    extraReducers: (builder ) => {
        builder
        .addCase(getProducts.pending,(state,action) => {
            state.status = 'loading'
        })
        .addCase(getProducts.fulfilled,(state,action) => {
            state.data = action.payload;
            state.status = 'idle'
        })
        .addCase(getProducts.rejected,(state,action) => {
            state.status = 'error'
        })
    }
})

export const {fetchProducts} = ShopSlice.actions

export default ShopSlice.reducer

export const getProducts = createAsyncThunk(
    'products/get',
    async() => {
        const response = await axios.get("https://dummyjson.com/products")
        console.log(response.data.products);
        return response.data.products
    }
)