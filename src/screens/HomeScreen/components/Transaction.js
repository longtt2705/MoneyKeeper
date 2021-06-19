import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SvgUri from "react-native-svg-uri";
import { useSelector } from "react-redux";
import { itemBackgroundColor, primaryColor } from "../../../api/constants";
import { formatNumber, getCategoryName, getIcon } from "../../../api/helper";

export default function Transaction({ transaction }) {
  const categories = useSelector((state) => state.categories);
  const categoryName = getCategoryName(transaction.categoryId, categories);

  return (
    <View style={styles.container}>
      <SvgUri
        width="40"
        height="40"
        source={getIcon(categoryName)}
        style={{ margin: 10, marginBottom: 0, marginRight: 20 }}
      />
      <View style={{ flex: 2 }}>
        <Text style={styles.strongTitle}>
          {transaction.note.length > 30
            ? transaction.note.slice(0, 30) + "..."
            : transaction.note}
        </Text>
        <Text style={styles.lightTitle}>{categoryName}</Text>
      </View>
      <View style={{ flexDirection: "column", marginRight: 5, marginLeft: 10 }}>
        <Text style={styles.strongTitle}>
          {formatNumber(transaction.moneyAmount)}
        </Text>
        <Text style={[styles.lightTitle, { alignSelf: "flex-end" }]}>vnđ</Text>
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
});
