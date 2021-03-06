import { createSlice } from "@reduxjs/toolkit";

export const darkSlice = createSlice({
  name: "dark",
  initialState: {
    checked: false,
  },
  reducers: {
    check: (state, action) => {
      if (action.payload) {
        state.checked = !state.checked;
      }
    },
  },
});

export const { check } = darkSlice.actions;
export default darkSlice.reducer;
