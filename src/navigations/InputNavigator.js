import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { createStackNavigator } from "@react-navigation/stack";
import AddExpenseTransaction from "../screens/InputTransaction/AddExpenseTransaction";
import AddIncomeTransaction from "../screens/InputTransaction/AddIncomeTransaction";
import ChooseWallets from "../screens/InputTransaction/ChooseWallets";
import Header from "../screens/InputTransaction/Header";

import { primaryColor, textColor } from "../api/constants";
import { addTransaction } from "../redux/slices/walletsSlice";

const Stack = createStackNavigator();

function InputNavigator() {
  const [date, setDate] = useState(new Date());
  const [moneyAmount, setMoneyAmount] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [note, setNote] = useState("");
  const lastUsedWalletId = useSelector(
    (state) => state.wallets.lastUsedWalletId
  );
  const [walletId, setWalletId] = useState(lastUsedWalletId);
  const [eventId, setEventId] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const dateString = date.toISOString();
    dispatch(
      addTransaction(
        categoryId,
        moneyAmount,
        note,
        dateString,
        "", // image
        walletId,
        eventId
      )
    );
  };

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
        {({ navigation }) => (
          <AddExpenseTransaction
            date={date}
            setDate={setDate}
            moneyAmount={moneyAmount}
            setMoneyAmount={setMoneyAmount}
            categoryId={categoryId}
            setCategoryId={setCategoryId}
            note={note}
            setNote={setNote}
            navigation={navigation}
            walletId={walletId}
            handleSubmit={handleSubmit}
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
      <Stack.Screen
        name="chooseWallet"
        options={{
          title: "Choose Wallet",
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
        }}
      >
        {({ navigation }) => (
          <ChooseWallets setWalletId={setWalletId} navigation={navigation} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default InputNavigator;
