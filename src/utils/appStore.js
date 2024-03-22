import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import stocksReducer from "./getAllstocksSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    stocks: stocksReducer,
  },
});

export default appStore;
