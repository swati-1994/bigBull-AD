import { createSlice } from "@reduxjs/toolkit";

const stocksSlice = createSlice({
  name: "stocks",
  initialState: {
    allStocks: null,
  },
  reducers: {
    getAllStocks: (state, action) => {
      state.allStocks = action.payload;
    },
  },
});

export const { getAllStocks } = stocksSlice.actions;
export default stocksSlice.reducer;
