import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const bookListAdapter = createEntityAdapter();

export const bookSelectors = bookListAdapter.getSelectors(
  (state) => state.bookList
);

const initialState = bookListAdapter.getInitialState({
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
});
console.log(initialState);


export const listSlice = createSlice({
  name: "bookList",
  initialState,
  reducers: {
    addList: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
    addComment: (state, action) => {
      state.items.comments.push(action.payload);
    },
  },
});

export const { addList, deleteItem, addComment } = listSlice.actions;
export default listSlice.reducer;
