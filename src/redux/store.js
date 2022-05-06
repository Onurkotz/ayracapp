import { configureStore } from "@reduxjs/toolkit";
import bookListReducer from "./listSlice/listSlice";

export const store = configureStore({
  reducer: {
    bookList: bookListReducer,
  },
});
