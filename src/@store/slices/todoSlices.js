import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  snackbar: false,
  todoList: [],
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
    openSnackbar(state, { payload }) {
      state.snackbar = payload.snackbar;
      state.severity = payload.severity;
      state.content = payload.content;
    },
    setJobsFromServer(state, { payload }) {
      state.todoList = payload;
    },
    addJob(state, { payload }) {
      state.todoList.push(payload);
    },
    deleteJob(state, { payload }) {
      state.todoList = [...state.todoList].filter(
        (item) => item.title !== payload.title
      );
    },
    updateJob(state, { payload }) {
      state.todoList.map((item) => {
        if (item.title === payload.title) {
          item.priority = payload.priority;
        }
        return item;
      });
    },

    closeSnackbar(state) {
      state.snackbar = false;
    },
  },
});

export const {
  loader,
  openSnackbar,
  addJob,
  deleteJob,
  updateJob,
  closeSnackbar,
  setJobsFromServer,
} = counterSlice.actions;

export default counterSlice.reducer;
