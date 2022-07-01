import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "../modules/message";
import authSlice from '../modules/auth';
import cartSlice from "../modules/cart";
import { combineReducers } from "@reduxjs/toolkit";


const reducers = combineReducers({
    message: messageSlice.reducer,
    auth: authSlice.reducer,
    cart: cartSlice.reducer
});

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
})
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch