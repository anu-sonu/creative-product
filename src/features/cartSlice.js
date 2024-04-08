import { createSlice } from '@reduxjs/toolkit';
import productData from "../productData";

const initialState = {
    cart : [],
    iteams : productData,
    totalQuantity : 0,
    totalPrice : 0,
}

export const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addtocart : (state,action)=>{
            let find=state.cart.findIndex((item)=>item.id===action.payload.id);
            if(find>=0){
                state.cart[find].quantity+=1;
            }else{
                state.cart.push(action.payload)
            }
        },

        getCartTotal : (state)=>{
            let {totalQuantity, totalPrice} = state.cart.reduce(
                (cartTotal, cartIteam) =>{
                    console.log("cartotal", cartTotal);
                    console.log("cartiteam", cartIteam);
                const {price, quantity} = cartIteam;
                console.log(price, quantity);
                const iteamTotal = price * quantity;
                cartTotal.totalPrice += iteamTotal;
                cartTotal.totalQuantity += quantity;
                return cartTotal
                },
                {
                    totalQuantity : 0,
                    totalPrice : 0,   
                }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },

        removeItem : (state, action) =>{
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },

        increaseIteamQuantity : (state,action) =>{
            state.cart = state.cart.map((item)=>{
                if(item.id === action.payload){
                    return {...item, quantity: item.quantity +1};
                }
                return item;
            });   
        },

        decreaseIteamQuantity : (state,action) =>{
            state.cart = state.cart.map((item)=>{
                if(item.id === action.payload && item.quantity>0){
                    return {...item, quantity: item.quantity -1};
                }
                return item;
            });   
        }
    }
})

export const {addtocart, getCartTotal, removeItem, increaseIteamQuantity, decreaseIteamQuantity} = cartSlice.actions
export default cartSlice.reducer
