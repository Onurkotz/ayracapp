import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listSlice/listSlice";

export const store = configureStore({
  reducer: {
    booklist: listReducer,
  },
});
