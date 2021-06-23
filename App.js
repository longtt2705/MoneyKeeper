import { NavigationContainer ,DefaultTheme} from "@react-navigation/native";
import React,{Component} from "react";
import { Provider } from "react-redux";
import Navigator from "./src/navigations/Navigator";

import store from "./src/redux/store/store";
//////////////////////////////

const App = () => {
 
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
        
      </NavigationContainer>
    </Provider>
  );
};

// console.log(store.getState());

export default App;
