import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider } from "react-redux";
import Navigator from "./src/navigations/Navigator";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./src/redux/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
