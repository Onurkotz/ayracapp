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
    deleteItem: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
  },
});

export const { addList, deleteItem } = listSlice.actions;
export default listSlice.reducer;
