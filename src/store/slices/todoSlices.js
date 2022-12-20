import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  snackbar: false,
  todos: [],
  severity: "success",
  content: "",
};

export const counterSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    loader: (state) => {
      state.isOpen = !state.isOpen;
    },
    openSnackbar(state, action) {
      console.log(action.payload);
      state.snackbar = action.payload;
    },
  },
});

export const { loader, openSnackbar } = counterSlice.actions;

export default counterSlice.reducer;
