import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import stocksReducer from "./getAllstocksSlice";
import oneStockReducer from "./getOneStockSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    stocks: stocksReducer,
    oneStock: oneStockReducer,
  },
});

export default appStore;
