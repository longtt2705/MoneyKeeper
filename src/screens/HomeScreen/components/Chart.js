import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { focusedColor, primaryColor } from "../../../api/constants";

const width = Dimensions.get("window").width;

export default function Chart({ data }) {
  console.log(data);
  return (
    <View style={{ flex: 1, alignItems: "center", margin: 20, marginTop: 10 }}>
      <View style={styles.chartContainer}>
        <PieChart
          data={data}
          width={width}
          height={250}
          chartConfig={{
            color: (opacity) => "transparent",
          }}
          accessor={"price"}
          paddingLeft={10}
          hasLegend={false}
        />
        <View style={styles.absoluteCenter}>
          <ScrollView style={styles.legends}>
            {data.map((value, index) => (
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
                <Text style={styles.legendText}>{value.category}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    color: focusedColor,
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
    marginLeft: 10,
  },
});
