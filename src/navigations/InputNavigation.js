import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import AddExpenseTransaction from "../screens/InputTransaction/AddExpenseTransaction";
import AddIncomeTransaction from "../screens/InputTransaction/AddIncomeTransaction";
import Header from "../screens/InputTransaction/Header";

const Stack = createStackNavigator();

function InputNavigation() {
  return (
    <Stack.Navigator headerMode="screen" initialRouteName="expense">
      <Stack.Screen
        name="expense"
        component={AddExpenseTransaction}
        options={{
          header: ({ scene, previous, navigation }) => (
            <Header navigation={navigation} scene={scene} />
          ),

          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="income"
        component={AddIncomeTransaction}
        options={{
          header: ({ scene, previous, navigation }) => (
            <Header navigation={navigation} scene={scene} />
          ),
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default InputNavigation;
