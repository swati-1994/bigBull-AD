import { createSlice } from "@reduxjs/toolkit";

const oneStockSlice = createSlice({
  name: "individualStock",
  initialState: {
    oneStocks: null,
  },
  reducers: {
    getParticularStock: (state, action) => {
      state.oneStocks = action.payload;
    },
  },
});

export const { getParticularStock } = oneStockSlice.actions;
export default oneStockSlice.reducer;
