import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  previousURL: "",
  cartItems:[]
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    SAVE_URL(state, action) {
      console.log(action.payload);
      state.previousURL = action.payload;
    },
    SHOW_CARDS(state,action){
      return(state)
    },
    addItemToCart(state,action){
      const itemId = action.payload;
      const itemIndex = state.cartItems.findIndex(item => item.id === itemId);
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity += 1; // Update quantity if item already in cart
      } else {
        state.cartItems.push({ id: itemId, quantity: 1 }); // Add new item to cart
      }
    },
    removeItemFromCart(state, action) {
      const itemId = action.payload.id;
      const itemIndex = state.cartItems.findIndex(item => item.id === itemId);
  
      if (itemIndex !== -1) {
        if (state.cartItems[itemIndex].quantity > 1) {
          state.cartItems[itemIndex].quantity -= 1; // Decrease quantity if more than 1
        } else {
          state.cartItems.splice(itemIndex, 1); // Remove item if quantity becomes 0
        }
      }
  },
  }
});

export const { SAVE_URL, SHOW_CARDS, addItemToCart, removeItemFromCart } = cartSlice.actions;

export const selectPreviousURL = (state) => state.cart.previousURL;
export const selectCartItems = (state) => state.cart.cartItems;

export default cartSlice.reducer;
