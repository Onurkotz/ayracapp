import { configureStore } from "@reduxjs/toolkit";
import bookListReducer from "./listSlice/listSlice";
import aboutReducer from "./aboutSlice/aboutSlice";
import goalReducer from "./goalSlice/goalSlice";
import darkReducer from "./darkSlice/darkSlice";

import throttle from "lodash/throttle";
import { saveState, loadState } from "./localStorage/localStorage";

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    bookList: bookListReducer,
    about: aboutReducer,
    myGoals: goalReducer,
    dark: darkReducer,
  },
  preloadedState,
});

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);
