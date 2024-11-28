import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "i am from host app",
};

const demoSlice = createSlice({
  name: "host-store",
  initialState,
  reducers: {
    getStoreData: (state, action) => {
       state.data = "New data";
       return state;
    },
  },
});

export const { getStoreData } = demoSlice.actions;
export default demoSlice.reducer;
