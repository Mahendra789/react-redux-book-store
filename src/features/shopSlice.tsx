import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '../interfaces/InitialState';
import { Book } from '../interfaces/Book';

const initialState: InitialState = {
  cartItems: [],
  quantity: 0,
  total: 0,
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addToCart: (state: InitialState, action: PayloadAction<Book>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        const book = { ...action.payload, quantity: 1 };
        state.cartItems.push(book);
      }
    },
    cartTotal: (state: InitialState) => {
      let quantity = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        quantity += item.quantity;
        total += item.price * item.quantity;
      });
      state.quantity = quantity;
      state.total = total;
    },
    removeFromCart: (state: InitialState, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increase: (state: InitialState, action: PayloadAction<{ id: number }>) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (cartItem) {
        cartItem.quantity = cartItem.quantity + 1;
      }
    },
    decrease: (state: InitialState, action: PayloadAction<{ id: number }>) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (cartItem) {
        cartItem.quantity = cartItem.quantity - 1;
      }
    },
    clearCart: (state: InitialState) => {
      return {
        ...state,
        cartItems: [],
      };
    },
  },
});

export const {
  addToCart,
  cartTotal,
  removeFromCart,
  increase,
  decrease,
  clearCart,
} = shopSlice.actions;
export default shopSlice.reducer;
