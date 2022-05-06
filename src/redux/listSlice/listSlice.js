import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "bookList",
  initialState: {
    items: [
      {
        id: "1",
        bookName: "Suç ve Ceza",
        author: "Dostoyevski",
        page: 650,
      },
      {
        id: "2",
        bookName: "Zorba",
        author: "Nikos Kazancakis",
        page: 325,
      },
    ],
  },
  reducers: {},
});

export default listSlice.reducer;
