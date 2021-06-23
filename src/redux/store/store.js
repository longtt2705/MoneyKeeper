import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from "../slices/categoriesSlice";
import eventsReducer from "../slices/eventsSlice";
import userReducer from "../slices/userSlice";
import walletsReducer from "../slices/walletsSlice";
import themeReducer from "./ThemeReducer";
const reducers = combineReducers({
  categories: categoriesReducer,
  events: eventsReducer,
  user: userReducer,
  wallets: walletsReducer,
  themes: themeReducer,
  
});

const store = configureStore({
  reducer: reducers,
});

export default store;
