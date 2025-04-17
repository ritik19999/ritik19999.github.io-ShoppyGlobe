import { createSlice } from "@reduxjs/toolkit";

    // tempItems:[],//temporary items for update
    // totalPrice:0

  const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
         
          console.log('payload:', action.payload);  
          const itemInCart = state.items.find((item) => item.id === action.payload.id);
         
          if (itemInCart) {
            itemInCart.quantity++;
            // console.log('Updated itemInCart:', JSON.parse(JSON.stringify(itemInCart)));
          } else {
            const newItem = { ...action.payload, quantity: 1 };
            state.items.push(newItem);
            // console.log('Added new item:', JSON.parse(JSON.stringify(newItem)));
          }
        },
        incrementQuantity: (state, action) => {
          const item = state.items.find((item) => item.id === action.payload);
          if (item) {
            item.quantity++;
          } else {
            console.warn("Item not found for increment:", action.payload);
          }
      },
      decrementQuantity: (state, action) => {
          const item = state.items.find((item) => item.id === action.payload);
          if (item.quantity === 1) {
              item.quantity = 1
          } else {
              item.quantity--;
          }
      },
      removeItem: (state, action) => {
          state.items = state.items.filter((item) => item.id !== action.payload);
      },
    clearCart:(state,action)=>{state.items.length=0}
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;
export default cartSlice.reducer;