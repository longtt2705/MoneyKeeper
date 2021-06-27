import {
  DarkTheme,
  NavigationContainer,
  useTheme,
} from "@react-navigation/native";
import React, { Component } from "react";
import { Provider as StoreProvider } from "react-redux";
import Navigator from "./src/navigations/Navigator";
import { PersistGate } from "redux-persist/integration/react";

import {
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";

import { store, persistor } from "./src/redux/store/store";

//////////////////////////////

const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
persistor.purge();
