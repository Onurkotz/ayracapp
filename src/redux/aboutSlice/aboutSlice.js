import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const aboutAdapter = createEntityAdapter();

const initialState = aboutAdapter.getInitialState({
  items: [
    {
      id: 1,
      think: "Oldukça etlieyici.",
    },
    {
      id: 2,
      think: "121. sayfadaki ifadeleri not almalıyım",
    },
  ],
});

export const aboutSelectors = aboutAdapter.getSelectors((state) => state.about);

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    addThink: (state, action) => {
      state.items.push(action.payload);
    },
    deleteThink: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
  },
});

export const { addThink, deleteThink } = aboutSlice.actions;
export default aboutSlice.reducer;
