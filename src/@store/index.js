import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
  Provider,
} from "react-redux";
import { persistStore } from "redux-persist";
import { rootReducer } from "./slices/rootReducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import thunk from "redux-thunk";

// ----------------------------------------------------------------------

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

setupListeners(store.dispatch);

const persistor = persistStore(store);

const { dispatch } = store;

export { store, persistor, dispatch, Provider };
