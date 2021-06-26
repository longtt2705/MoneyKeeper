import { DarkTheme, NavigationContainer, useTheme } from "@react-navigation/native";
import React, { Component } from "react";
import { Provider as StoreProvider } from "react-redux";
import Navigator from "./src/navigations/Navigator";

import { DefaultTheme as PaperDefaultTheme , Provider as PaperProvider, DarkTheme as PaperDarkTheme } from 'react-native-paper';
import store from "./src/redux/store/store";

//////////////////////////////

const App = () => {

  return (
    <StoreProvider store={store}  >
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
