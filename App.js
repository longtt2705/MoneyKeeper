import {
  DarkTheme as NavigationDarkTheme,
  NavigationContainer,
  useTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import React, { Component, useState } from "react";
import { Provider as StoreProvider } from "react-redux";
import Navigator from "./src/navigations/Navigator";
import { PersistGate } from "redux-persist/integration/react";

import {
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";

import { store, persistor } from "./src/redux/store/store";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer", "VirtualizedLists"]);

//////////////////////////////

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const customDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme,
      ...PaperDefaultTheme,
    },
  };
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
