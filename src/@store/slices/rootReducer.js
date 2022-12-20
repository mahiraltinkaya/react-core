import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// slices
import todoSlice from "./todoSlices";

import { persistReducer } from "redux-persist";

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  todos: persistReducer(rootPersistConfig, todoSlice),
});

export { rootPersistConfig, rootReducer };
