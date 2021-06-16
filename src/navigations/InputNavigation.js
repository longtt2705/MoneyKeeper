import React, { useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import AddExpenseTransaction from "../screens/InputTransaction/AddExpenseTransaction";
import AddIncomeTransaction from "../screens/InputTransaction/AddIncomeTransaction";
import Header from "../screens/InputTransaction/Header";

const Stack = createStackNavigator();

function InputNavigation() {
  const [date, setDate] = useState(new Date());
  const [moneyAmount, setMoneyAmount] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [note, setNote] = useState("");

  return (
    <Stack.Navigator headerMode="screen" initialRouteName="expense">
      <Stack.Screen
        name="expense"
        options={{
          header: ({ scene, previous, navigation }) => (
            <Header
              navigation={navigation}
              scene={scene}
              setCategoryId={setCategoryId}
            />
          ),

          animationEnabled: false,
        }}
      >
        {() => (
          <AddExpenseTransaction
            date={date}
            setDate={setDate}
            moneyAmount={moneyAmount}
            setMoneyAmount={setMoneyAmount}
            categoryId={categoryId}
            setCategoryId={setCategoryId}
            note={note}
            setNote={setNote}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="income"
        options={{
          header: ({ scene, previous, navigation }) => (
            <Header
              navigation={navigation}
              scene={scene}
              setCategoryId={setCategoryId}
            />
          ),
          animationEnabled: false,
        }}
      >
        {() => (
          <AddIncomeTransaction
            date={date}
            setDate={setDate}
            moneyAmount={moneyAmount}
            setMoneyAmount={setMoneyAmount}
            categoryId={categoryId}
            setCategoryId={setCategoryId}
            note={note}
            setNote={setNote}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default InputNavigation;
