import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import countSlice from "./slices/countSlice";

const rootReducer = combineReducers({
  login: loginSlice,
  count: countSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

console.log("On create store:", store.getState());

store.subscribe(() => {
  console.log("On update store:", store.getState());
});

export default store;
