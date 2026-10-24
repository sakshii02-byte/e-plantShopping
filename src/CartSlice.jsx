
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',

  initialState: {
    items: [],
  },

  reducers: {
    // Add a plant to the cart
    addItem: (state, action) => {
      const product = action.payload;

      const existingItem = state.items.find(
        (item) => item.name === product.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
    },

    // Remove a plant from the cart
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name !== action.payload
      );
    },

    // Update the quantity of a plant
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      const existingItem = state.items.find(
        (item) => item.name === name
      );

      if (existingItem) {
        if (quantity <= 0) {
          state.items = state.items.filter(
            (item) => item.name !== name
          );
        } else {
          existingItem.quantity = quantity;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } =
  CartSlice.actions;

export default CartSlice.reducer;
