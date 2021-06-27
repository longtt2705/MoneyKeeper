import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { useSelector } from "react-redux";
import { primaryColor, textColor } from "../../../api/constants";
import { formatNumber, getCategoryName } from "../../../api/helper";

const width = Dimensions.get("window").width;

export default function Chart({ data, balance }) {
  const categories = useSelector((state) => state.categories);
  const pieData = data.map((trans) => {
    return {
      name: getCategoryName(trans.id, categories),
      price: trans.moneyAmount,
      color: trans.color,
    };
  });

  // const calculateTotal = () => {
  //   return formatNumber(pieData.reduce((total, item) => total + item.price, 0));
  // };

  return (
    <View style={styles.chartContainer}>
      <PieChart
        data={pieData}
        width={width}
        height={225}
        chartConfig={{
          color: (opacity) => "transparent",
        }}
        accessor={"price"}
        paddingLeft={10}
        hasLegend={false}
      />
      <View style={styles.absoluteCenter}>
        <ScrollView style={styles.legends}>
          {pieData.map((value, index) => (
            <View
              style={{ flexDirection: "row", alignItems: "center" }}
              key={index}
            >
              <View
                style={{
                  backgroundColor: value.color,
                  width: 20,
                  height: 20,
                }}
              ></View>
              <Text style={styles.legendText}>{value.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View>
        <Text style={styles.totalAmount}>
          <Text style={{ fontSize: 44 }}>{formatNumber(balance)}</Text>
          <Text style={{ fontSize: 24 }}> vnd</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  totalAmount: {
    textAlign: "right",
    color: textColor,
    fontWeight: "bold",
    marginRight: 30,
  },
  chartContainer: {
    width: "100%",
    height: 300,
    borderRadius: 50,
    backgroundColor: primaryColor,
  },
  legends: {
    position: "absolute",
    width: width - 40 - ((width - 20) / 2 + 30) - 10,
    alignSelf: "baseline",
    marginTop: 20,
    maxHeight: 200,
  },
  legendText: {
    color: textColor,
    fontSize: 22,
    fontWeight: "bold",
    paddingLeft: 5,
  },
  absoluteCenter: {
    height: 200,
    position: "absolute",
    left: (width - 20) / 2 + 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    top: 0,
    bottom: 0,
    marginLeft: 0,
  },
});
