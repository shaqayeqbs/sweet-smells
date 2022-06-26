import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  text: "",
  when: Date(),
};
const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage(state, action) {
      state.text = action.payload;
      toast(action.payload);
      state.when = new Date().toISOString();
    },

    cleanMessage(state) {
      state.text = "";
      state.when = new Date().toISOString();
    },
  },
});

export const messageActions = messageSlice.actions;
export default messageSlice;
