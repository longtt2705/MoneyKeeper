import {
  DarkTheme as NavigationDarkTheme,
  NavigationContainer,
  useTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import React, { Component, useState } from "react";
import { Provider as StoreProvider } from "react-redux";
import Navigator from "./src/navigations/Navigator";

import {
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";
import store from "./src/redux/store/store";

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
      <PaperProvider>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
};

// console.log(store.getState());

export default App;
