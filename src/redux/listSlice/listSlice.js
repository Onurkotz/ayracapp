import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "bookList",
  initialState: {
    items: [],
  },
  reducers: {},
});


export default listSlice.reducer;
