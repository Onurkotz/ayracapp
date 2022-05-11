import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "languageMode",
  initialState: {
    isEnglish: false,
  },
  reducers: {
    englishMode: (state, action) => {
      if (action.payload) {
        state.isEnglish = !state.isEnglish;
      }
    },
  },
});

export const { englishMode } = languageSlice.actions;
export default languageSlice.reducer;
