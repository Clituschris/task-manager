import { reducers } from "./mainReducer";

const { configureStore, combineReducers } = require("@reduxjs/toolkit");

const RESETACTION = "main/reset-store";

const rootReducer = combineReducers(reducers);

const resetableReducer = (state, action) => {
  if (action.type === RESETACTION) {
    state = undefined;
  }

  return rootReducer(state, action);
};

export const store = configureStore({
  reducer: resetableReducer,
});

export const resetStore = () => {
  store.dispatch({ type: RESETACTION });
};
