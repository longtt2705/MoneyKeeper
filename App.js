import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import FloatingActionButton from "./src/components/FloatingActionButton";
import HomeStackNavigator from "./src/navigations/Navigator";

const App = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
      {/* <FloatingActionButton /> */}
    </NavigationContainer>
  );
};

export default App;
