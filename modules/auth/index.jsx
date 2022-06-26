import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { signinService, signupService } from "./service";

const initialState = {
  token: "",
  serverMessage: "",
  status: "",
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signout(state) {
      state.token = "";
      state.serverMessage = "";
      state.status = "";
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      (state.status = 'AUTH_SIGNIN_REQUEST'), (state.loading = true);
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      if (action.payload) {
        console.log(action.payload, "success");
        state.status = action.payload.status;
        state.serverMessage = action.payload.message;
        state.loading = false;
        if (state.status && action.payload.result) {
          state.token = action.payload.result.token;
        }
      }
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.status = 'AUTH_SIGNIN_FAILED';
      console.log(action.payload, "rej");
    });
    builder.addCase(signUpUser.pending, (state) => {
      state.lastTry = new Date().toISOString();
      state.status = 'AUTH_SIGNIN_REQUEST';
      state.loading = true;
    });
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.status = action.payload.status;
      state.serverMessage = action.payload.message;
      state.loading = false;
      if (state.status) {
        state.token = action.payload.result;
      }
    });
    builder.addCase(signUpUser.rejected, (state) => {
      state.status = 'AUTH_SIGNUP_FAILED';
      state.loading = false;
    });
  },
});
export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async ({ email, password }) => signinService(email, password)
);
export const signUpUser = createAsyncThunk(
  "user/signUpUser",
  async ({ fullname , email, password}) => {
    return signupService(email, password, fullname);
  }
);
export const authActions = authSlice.actions;
export default authSlice;
