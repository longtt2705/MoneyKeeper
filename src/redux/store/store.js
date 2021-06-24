import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";

import categoriesReducer from "../slices/categoriesSlice";
import eventsReducer from "../slices/eventsSlice";
import userReducer from "../slices/userSlice";
import walletsReducer from "../slices/walletsSlice";

const reducers = combineReducers({
  categories: categoriesReducer,
  events: eventsReducer,
  user: userReducer,
  wallets: walletsReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const pReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: pReducer,
  middleware: [thunk, logger],
});

export const persistor = persistStore(store);
