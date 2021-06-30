import {
  differenceInMonths,
  differenceInWeeks,
  differenceInYears,
} from "date-fns";
import React, { useCallback, useEffect, useState } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { useSelector } from "react-redux";
import { backgroundColor, primaryColor, textColor } from "../../api/constants";
import { generateListColor, mergeColorToData } from "../../api/helper";
import Chart from "./components/Chart";
import Headlines from "./components/Headlines";
import Notifications from "./components/Notifications";
import Picker from "./components/Picker";
import TransactionList from "./components/TransactionList";
import { getMonth, getWeek, getYear } from "date-fns";

export default function Home({ navigation }) {
  const [value, setValue] = useState("m");
  const user = useSelector((state) => state.user);
  const [data, setData] = useState(null);
  const transactions = useSelector(
    (state) =>
      state.wallets.wallets.find(
        (wallet) => wallet.id === state.wallets.lastUsedWalletId
      ).transactions
  );
  const balance = useSelector(
    (state) =>
      state.wallets.wallets.find(
        (wallet) => wallet.id === state.wallets.lastUsedWalletId
      ).balance
  );

  useEffect(() => {
    const filterTransactions = (state) => {
      const retypeDateTransactions = transactions.map((trans) => ({
        ...trans,
        date: new Date(trans.date),
      }));
      let transactionsFiltered = null;
      const today = new Date();
      switch (value) {
        case "w":
          transactionsFiltered = retypeDateTransactions.filter(
            (transaction) => getWeek(today) === getWeek(transaction.date)
          );
          break;
        case "m":
          transactionsFiltered = retypeDateTransactions.filter(
            (transaction) => getMonth(today) === getMonth(transaction.date)
          );
          break;
        case "y":
          transactionsFiltered = retypeDateTransactions.filter(
            (transaction) => getYear(today) === getYear(transaction.date)
          );
          break;
        default:
          break;
      }
      setData(transactionsFiltered);
    };
    filterTransactions();
  }, [value, transactions]);

  const generateChartData = useCallback(() => {
    const chartData = [];
    const transactionData = data.reduce((map, transaction) => {
      return {
        ...map,
        [transaction.categoryId]: map[transaction.categoryId]
          ? map[transaction.categoryId] + transaction.moneyAmount
          : transaction.moneyAmount,
      };
    }, {});

    for (const id in transactionData) {
      chartData.push({ id: id, moneyAmount: transactionData[id] });
    }
    const listColor = generateListColor(chartData);
    return mergeColorToData(chartData, listColor);
  }, [data]);

  if (transactions.length == 0) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Headlines user={user} />
          <Notifications />
          <View
            style={{
              alignSelf: "center",
              marginTop: 30,
              height: 300,
              width: 300,
              borderRadius: 50,
              backgroundColor: primaryColor,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: textColor, fontSize: 30 }}>No Record</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Headlines user={user} />
        <Notifications />
        {data && data.length > 0 && (
          <>
            <Picker value={value} setValue={setValue} />
            <View style={styles.walletContainer}>
              <Chart data={generateChartData()} balance={balance} />
              <TransactionList transactions={data} />
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  walletContainer: {
    flex: 1,
    alignItems: "center",
    margin: 20,
    marginTop: 10,
  },
});
