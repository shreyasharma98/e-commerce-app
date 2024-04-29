import { createSlice } from "@reduxjs/toolkit";

const initialState = []


const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addItemToCart(state,action){
            const newProdID = action.payload.id
            const existingItem = state.find(item => item.id === newProdID);
            if(existingItem){
                existingItem.quantity+=1
            }
            else{
                const product = action.payload
                state.push({...product, quantity : 1})
            }
        },
        removeFromCart(state, action) {
            const idToRemove = action.payload;
            return state.filter(item => item.id !== idToRemove);
        },
        incrementItemCount(state,action){
            const newProdID = action.payload
            const existingItem = state.find(item => item.id === newProdID);
            if(existingItem){
                existingItem.quantity+=1
            }

        },
        decrementItemCount(state,action){
            const newProdID = action.payload
            const existingItem = state.find(item => item.id === newProdID);
            if(existingItem && existingItem.quantity > 1){
                existingItem.quantity-=1
            }
            else if(existingItem && existingItem.quantity <= 1){
                return state.filter(item => item.id !== newProdID);
            }
        },
        emptyCart(state,action){
            return [];
        }
    }
})


export const allItems = (state) => state.cart;
export const { addItemToCart,removeFromCart, decrementItemCount,incrementItemCount,emptyCart } = cartSlice.actions
export default cartSlice.reducer;