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
} from "react-native";
import { useSelector } from "react-redux";
import { backgroundColor } from "../../api/constants";
import { generateListColor, mergeColorToData } from "../../api/helper";
import Chart from "./components/Chart";
import Headlines from "./components/Headlines";
import Notifications from "./components/Notifications";
import Picker from "./components/Picker";
import TransactionList from "./components/TransactionList";
import { getMonth, getWeek, getYear } from "date-fns";

export default function Home({ navigation }) {
  const [value, setValue] = useState("m");
  const username = useSelector((state) => state.user.userName);
  const [data, setData] = useState(null);
  const transactions = useSelector(
    (state) =>
      state.wallets.wallets.find(
        (wallet) => wallet.id === state.wallets.lastUsedWalletId
      ).transactions
  );

  useEffect(() => {
    const filterTransactions = (state) => {
      let transactionsFiltered = null;
      const today = new Date();
      switch (value) {
        case "w":
          transactionsFiltered = transactions.filter(
            (transaction) => getWeek(today) === getWeek(transaction.date)
          );
          break;
        case "m":
          transactionsFiltered = transactions.filter(
            (transaction) => getMonth(today) === getMonth(transaction.date)
          );
          break;
        case "y":
          transactionsFiltered = transactions.filter(
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Headlines name={username} />
        <Notifications />
        {data && data.length > 0 && (
          <>
            <Picker value={value} setValue={setValue} />
            <View style={styles.walletContainer}>
              <Chart data={generateChartData()} />
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
