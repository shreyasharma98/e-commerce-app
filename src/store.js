import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./stores/cartSlice"


export  const store = configureStore({
    reducer : {
        cart : cartSlice
    }
})