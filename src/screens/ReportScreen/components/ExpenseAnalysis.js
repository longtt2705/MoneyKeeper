import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { backgroundColor, primaryColor } from "../../../api/constants";
import { formatNumber } from "../../../api/helper";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES, icons } from "../../../api/index";
import SelectDropdown from "react-native-select-dropdown";
import Svg from "react-native-svg";
import moment from "moment";
import {
  VictoryTooltip,
  VictoryVoronoiContainer,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel,
} from "victory-native";
const report = [
  "Financial Statement",
  "Expense Income",
  "Expense Analysis",
  "Income Analysis",
];
const ExpenseAnalysis = ({ navigation }) => {
  //{Create empty array====================================================}
  var dt = new Date();
  var month = dt.getMonth() + 1;
  var year = dt.getFullYear();
  var daysInMonth = new Date(year, month, 0).getDate();
  let tdata = [];
  for (let i = 1; i <= daysInMonth; i++) {
    var t = i;
    if (i < 10) {
      t = "0" + `${i}`;
    }
    tdata.push({ id: i, x: `${t}/${month}/${year}`, y: 0 });
  }
  //{Load data============================================================}
  const loadtransactions = useSelector(
    (state) =>
      state.wallets.wallets.find(
        (wallet) => wallet.id === state.wallets.lastUsedWalletId
      ).transactions
  );
  const transactions = loadtransactions.filter((x) => x.type == "expense");

  for (const id in transactions) {
    var tempDate = new Date(transactions[id].date);
    var tempmonth = tempDate.getMonth() + 1;
    var tempyear = tempDate.getFullYear();
    var tdate = tempDate.getDate();
    if (tempyear == year) {
      if (tempmonth == month) {
        tdata[tdate - 1].y += transactions[id].moneyAmount;
      }
    }
  }
  //{Calculate total & avenge============================================}
  let totalAmount = 0;
  let avengeAmount = 0;
  transactions.map((e) => (totalAmount = totalAmount + e.moneyAmount));
  avengeAmount = Math.floor(totalAmount / daysInMonth);
  totalAmount = formatNumber(totalAmount);
  let chartdata = tdata;

  chartdata.map((e) => {
    if (e.y >= 1000) {
      e.y = e.y / 1000;
    }
  });

  function Header() {
    return (
      <View style={styles.bgHeader}>
        <SelectDropdown
          data={report}
          onSelect={(selectedItem, index) => {
            navigation.navigate(selectedItem);
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          renderDropdownIcon={() => (
            <AntDesign name="caretdown" size={12} color="#707070" />
          )}
          defaultButtonText={report[2]}
          buttonStyle={styles.dropdownButtonStyle}
          buttonTextAfterSelection={() => {
            return report[2];
          }}
          dropdownStyle={styles.dropdownStyle}
          buttonTextStyle={styles.dropdownButtonTextStyle}
        />
      </View>
    );
  }
  function renderDate() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          paddingVertical: 10,
          backgroundColor: COLORS.white,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.lightGray,
              height: 50,
              width: 50,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={icons.calendar}
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.lightBlue,
              }}
            />
          </View>

          <View style={{ marginLeft: SIZES.padding }}>
            <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>
              {tdata[0].x} - {tdata[daysInMonth - 1].x}
            </Text>
          </View>
        </View>
      </View>
    );
  }
  function renderTotalEstimate() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          paddingVertical: 10,
          backgroundColor: COLORS.white,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ marginLeft: -15 }}>
            <Text style={{ ...FONTS.h3, color: COLORS.secondary }}>
              Total Expense
            </Text>
          </View>

          <View>
            <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>
              {totalAmount} VND
            </Text>
          </View>
        </View>
      </View>
    );
  }
  function renderAvangeEstimate() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          paddingVertical: 10,
          backgroundColor: COLORS.white,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ marginLeft: -15 }}>
            <Text style={{ ...FONTS.h3, color: COLORS.secondary }}>
              Avenge Expense
            </Text>
          </View>

          <View>
            <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>
              {formatNumber(avengeAmount)} VND
            </Text>
          </View>
        </View>
      </View>
    );
  }
  function renderChart() {
    return (
      <ScrollView horizontal={true}>
        <View
          style={{
            marginTop: 15,
            marginBottom: 15,
            backgroundColor: COLORS.white,
          }}
        >
          <View style={{ marginBottom: -30, marginTop: 15 }}>
            <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>
              Money(Unit: Thousand)
            </Text>
          </View>
          <VictoryChart
            domainPadding={10}
            width={1000}
            theme={VictoryTheme.material}
            containerComponent={
              <VictoryVoronoiContainer
                labels={({ datum }) => `${datum.y}k \n ${datum.x}`}
                labelComponent={
                  <VictoryTooltip
                    cornerRadius={10}
                    flyoutStyle={{ stroke: "white", fill: "white" }}
                    style={{ fill: "tomato", backgroundColor: "white" }}
                    constrainToVisibleArea
                  />
                }
              />
            }
          >
            <VictoryAxis style={{ tickLabels: { fill: "white" } }} />
            <VictoryAxis dependentAxis />
            <VictoryBar
              style={{ data: { fill: COLORS.secondary } }}
              data={chartdata}
            />
          </VictoryChart>
        </View>
      </ScrollView>
    );
  }
  function renderHistory() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          paddingVertical: 10,
          backgroundColor: COLORS.white,
        }}
      >
        <View style={{ marginLeft: -10 }}>
          <Text
            style={{
              ...FONTS.h2,
              marginBottom: 20,
              color: "black",
              fontWeight: "bold",
            }}
          >
            History
          </Text>
          <FlatList
            data={tdata}
            renderItem={({ item, index }) =>
              item.y != 0 ? (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    marginBottom: 15,
                    height: 40,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: 10,
                    backgroundColor: COLORS.white,
                    ...styles.shadow,
                  }}
                >
                  {/* Name/Category */}
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: COLORS.secondary,
                        borderRadius: 25,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          ...FONTS.h2,
                        }}
                      >
                        {item.x.substring(0, 2)}
                      </Text>
                    </View>

                    <Text
                      style={{
                        marginLeft: SIZES.base,
                        color: COLORS.primary,
                        ...FONTS.h3,
                      }}
                    >
                      {item.x}
                    </Text>
                  </View>

                  {/* Expenses */}
                  <View style={{ justifyContent: "center" }}>
                    <Text style={{ color: COLORS.secondary, ...FONTS.h3 }}>
                      {formatNumber(item.y)} VND{" "}
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : null
            }
            keyExtractor={(item) => `${item.x}`}
          />
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {Header()}
      {renderDate()}
      {renderTotalEstimate()}
      {renderAvangeEstimate()}
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        {renderChart()}
        {renderHistory()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  bgHeader: {
    backgroundColor: "#1A2C65",
    height: 50,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 50,
  },
  headerStyle: {
    fontSize: 25,
    textAlign: "center",
    margin: 10,
    color: "#fff",
  },
  dropdown: {
    width: 210,
    height: 35,
    alignSelf: "center",
    borderRadius: 40,
    marginTop: 7,
  },
  dropdownButtonStyle: {
    width: 210,
    height: 35,
    alignSelf: "center",
    borderRadius: 40,
    marginTop: 7,
  },
  dropdownStyle: {
    width: 210,
    marginTop: -30,
  },
  dropdownButtonTextStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default ExpenseAnalysis;
