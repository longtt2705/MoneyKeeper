import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { createStackNavigator } from "@react-navigation/stack";
import AddExpenseTransaction from "../screens/InputTransaction/AddExpenseTransaction";
import AddIncomeTransaction from "../screens/InputTransaction/AddIncomeTransaction";
import ChooseWallet from "../screens/InputTransaction/ChooseWallet";
import ChooseEvent from "../screens/InputTransaction/ChooseEvent";
import Header from "../screens/InputTransaction/Header";
import CategoriesList from "../screens/CategoryScreen/CategoriesList";
import NewCategory from "../screens/CategoryScreen/NewCategory";

import { primaryColor, textColor } from "../api/constants";
import { addTransaction, updateWallet } from "../redux/slices/walletsSlice";

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
  const [eventId, setEventId] = useState("0");

  const dispatch = useDispatch();

  const handleSubmit = (type) => {
    const dateString = date.toISOString();
    dispatch(
      addTransaction(
        categoryId,
        moneyAmount.replace(/,/g, ""), // bỏ dấu phấy trước khi dispatch
        note,
        dateString,
        "", // image
        walletId,
        eventId,
        type
      )
    );

    setDate(new Date());
    setMoneyAmount("");
    setNote("");
    setCategoryId("");
    setEventId("0");
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
            eventId={eventId}
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
        {({ navigation }) => (
          <AddIncomeTransaction
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
            eventId={eventId}
            handleSubmit={handleSubmit}
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
          <ChooseWallet setWalletId={setWalletId} navigation={navigation} />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="chooseEvent"
        options={{
          title: "Choose Event",
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
        }}
      >
        {({ navigation }) => (
          <ChooseEvent setEventId={setEventId} navigation={navigation} />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="Category"
        component={CategoriesList}
        initialParams={{ type: "expense" }}
        options={{
          title: "Category",
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="NewCategory"
        component={NewCategory}
        initialParams={{ type: "expense" }}
        options={{
          title: "New Category",
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
}

export default InputNavigator;
