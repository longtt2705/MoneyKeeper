import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { itemBackgroundColor, primaryColor } from "../../../api/constants";
import { formatNumber } from "../../../api/helper";

export default function Transaction({ transaction }) {
  const category = useSelector((state) =>
    state.categories.find((category) => category.id === transaction.categoryId)
  );

  if (!category) return null;

  return (
    <View style={styles.container}>
      <Image source={category.icon} style={styles.icon} />

      <View style={{ flex: 2 }}>
        <Text style={styles.strongTitle}>
          {transaction.note.length > 30
            ? transaction.note.slice(0, 30) + "..."
            : transaction.note}
        </Text>
        <Text style={styles.lightTitle}>{category.title}</Text>
      </View>
      <View style={{ flexDirection: "column", marginRight: 5, marginLeft: 10 }}>
        <Text style={styles.strongTitle}>
          {formatNumber(transaction.moneyAmount)}
        </Text>
        <Text style={[styles.lightTitle, { alignSelf: "flex-end" }]}>VND</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 17,
    backgroundColor: itemBackgroundColor,
    flex: 1,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  strongTitle: {
    fontWeight: "bold",
    color: primaryColor,
    fontSize: 21,
  },
  lightTitle: {
    fontWeight: "bold",
    color: "gray",
    fontSize: 15,
  },
  icon: {
    margin: 10,
    marginBottom: 0,
    marginRight: 20,
    width: 35,
    height: 35,
  },
});
