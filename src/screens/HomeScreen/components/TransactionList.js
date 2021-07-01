import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { buttonColor, textColor } from "../../../api/constants";
import Transaction from "./Transaction";
const { format } = require("date-fns");

export default function TransactionList({ transactions, navigation }) {
  const [data, setData] = useState(null);
  const maxTransactionDisplayed = 10;

  useEffect(() => {
    const normalizeData = () => {
      if (transactions === null) return;
      const transactionsFiltered =
        transactions.length > maxTransactionDisplayed
          ? transactions.slice(0, maxTransactionDisplayed)
          : transactions;
      transactionsFiltered.sort((a, b) => b.date - a.date);

      const today = format(new Date(), "MMM do");

      const normalizedDataObject = transactionsFiltered.reduce(
        (data, transaction) => {
          let formatedDate = format(transaction.date, "MMM do");
          if (formatedDate == today) formatedDate = "Today";

          return {
            ...data,
            [formatedDate]: data[formatedDate]
              ? [...data[formatedDate], transaction]
              : [transaction],
          };
        },
        []
      );

      const normalizedData = [];
      for (const date in normalizedDataObject) {
        normalizedData.push({
          dateKey: date,
          transactions: [...normalizedDataObject[date]],
        });
      }

      setData(normalizedData);
    };
    normalizeData();
  }, [transactions]);

  return (
    <View style={styles.container}>
      {data &&
        data.map((transGroupByDate) => {
          return (
            <View style={{ marginTop: 30 }} key={transGroupByDate.dateKey}>
              <Text style={styles.dateLabel}>{transGroupByDate.dateKey}</Text>
              {transGroupByDate.transactions.map((transaction) => (
                <Transaction
                  transaction={transaction}
                  key={transaction.id}
                  navigation={navigation}
                />
              ))}
            </View>
          );
        })}

      {transactions && transactions.length > maxTransactionDisplayed && (
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>More...</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    width: "100%",
    flexDirection: "column",
  },
  dateLabel: {
    fontWeight: "bold",
    fontSize: 22,
    color: textColor,
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: buttonColor,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 29,
    alignSelf: "baseline",
    alignSelf: "flex-end",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: textColor,
    fontSize: 18,
  },
});
