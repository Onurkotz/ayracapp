import { createSlice } from "@reduxjs/toolkit";

export const goalSlice = createSlice({
  name: "myGoals",
  initialState: {
    items: [
      {
        id: 1,
        goalName: "Melek Yüzlü Çocuklar",
        goalAuthor: "Mehmet Alan",
      },
      {
        id: 2,
        goalName: "Aşk-ı Memnu",
        goalAuthor: "Halit Ziya Uşaklıgil",
      },
    ],
  },
  reducers: {
    addGoal: (state, action) => {
      state.items.push(action.payload);
    },
    deleteGoal: (state, action) => {
        const id = action.payload;
        const filtered = state.items.filter((item) => item.id !== id);
        state.items = filtered;
    }
  },
});

export const {addGoal, deleteGoal} = goalSlice.actions;
export default goalSlice.reducer;
