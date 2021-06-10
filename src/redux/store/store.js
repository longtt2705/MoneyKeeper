import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import walletsReducer from "../slices/walletsSlice";
import categoriesReducer from "../slices/categoriesSlice";

const reducers = combineReducers({
  wallets: walletsReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
