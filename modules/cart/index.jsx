import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  removeAllItem: (id) => {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;
      ////

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload); //like push but returns a new arry
      }
      state.items = updatedItems;
      state.totalAmount = updatedTotalAmount;
    },
    removeItem(state, action) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.payload);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      (state.items = updatedItems), (state.totalAmount = updatedTotalAmount);
    },
    removeAllItem(state, action) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (existingCartItemIndex != -1) {
        const existingItem = state.items[existingCartItemIndex];

        const updatedTotalAmount =
          state.totalAmount - existingItem.price * existingItem.amount;
        let updatedItems;

        updatedItems = state.items.filter((item) => item.id !== action.payload);

        (state.items = updatedItems), (state.totalAmount = updatedTotalAmount);
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
