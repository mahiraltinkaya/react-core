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
      state.snackbar = action.payload.snackbar;
      state.severity = action.payload.severity;
      state.content = action.payload.content;
    },
    addJob(state, action) {
      state.todos.push(action.paylaod);
    },
    deleteJob(state, action) {
      state.todos.splice(action.payload, 1);
    },
    updateJob(state, action) {
      state.todos = state.todos.map((item) => {
        if (item.title === action.payload.title) {
          item.priority = action.payload.priority;
        }
        return item;
      });
    },
  },
});

export const { loader, openSnackbar, addJob, deleteJob, updateJob } =
  counterSlice.actions;

export default counterSlice.reducer;
