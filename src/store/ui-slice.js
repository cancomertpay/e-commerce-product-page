import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isOpen: false },
  reducers: {
    toggleUi(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
