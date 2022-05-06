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
        genre: "Roman",
      },
      {
        id: "2",
        bookName: "Zorba",
        author: "Nikos Kazancakis",
        page: 325,
        genre: "Roman",
      },
    ],
  },
  reducers: {
    addList: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addList } = listSlice.actions;
export default listSlice.reducer;
