import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "./slice/profileSlice";
import cartReducer from "./slice/cartSlice";

const rootReducer = combineReducers({
  profile: profileReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});



export default store;
