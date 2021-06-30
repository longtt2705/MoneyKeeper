import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { backgroundColor, primaryColor } from "../../../api/constants";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Animated,
  Platform,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ExpenseCategory from "./ExpenseCategoy";
import IncomeCategory from "./IncomeCategory";
import { AntDesign } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import { COLORS, FONTS, SIZES, icons, images } from "../../../api/index";
import Constants from "expo-constants";
const report = [
  "Financial Statement",
  "Expense Income",
  "Expense Analysis",
  "Income Analysis",
];
const Tab = createMaterialTopTabNavigator();
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
const Expense_Income = ({ navigation }) => {
  var dt = new Date();
  var month = dt.getMonth() + 1;
  var year = dt.getFullYear();
  var daysInMonth = new Date(year, month, 0).getDate();
  const [date1, setDate1] = useState(new Date(year, month, -daysInMonth + 1));
  const [date2, setDate2] = useState(new Date(year, month, 0));
  const [show, setShow] = useState(false);
  const [showDatePicker1, setShowDatePicker1] = useState(false);
  const [showDatePicker2, setShowDatePicker2] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  console.log(date1);
  console.log(date2);
  const hideDatePicker1 = () => {
    setShowDatePicker1(false);
  };
  const openDatePicker1 = () => {
    setShowDatePicker1(true);
  };
  const hideDatePicker2 = () => {
    setShowDatePicker2(false);
  };
  const openDatePicker2 = () => {
    setShowDatePicker2(true);
  };
  const handleConfirm1 = (date1) => {
    setDate1(date1);
    hideDatePicker1();
  };
  const handleConfirm2 = (date2) => {
    setDate2(date2);
    hideDatePicker2();
  };

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
          defaultButtonText={report[1]}
          buttonStyle={styles.dropdownButtonStyle}
          buttonTextAfterSelection={() => {
            return report[1];
          }}
          dropdownIconPosition="right"
          renderDropdownIcon={() => (
            <AntDesign name="caretdown" size={12} color="#707070" />
          )}
          dropdownStyle={styles.dropdownStyle}
          buttonTextStyle={styles.dropdownButtonTextStyle}
        />
      </View>
    );
  }
  function renderDate() {
    return (
      <SafeAreaView>
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

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{ ...FONTS.body3, color: COLORS.darkgray }}
                onPress={openDatePicker1}
              >
                {moment(date1).format("DD/MM/YYYY")} -{" "}
              </Text>
              <Text
                style={{ ...FONTS.body3, color: COLORS.darkgray }}
                onPress={openDatePicker2}
              >
                {moment(date2).format("DD/MM/YYYY")}
              </Text>
            </View>

            <View>
              <DateTimePickerModal
                isVisible={showDatePicker1}
                mode="date"
                onConfirm={handleConfirm1}
                onCancel={hideDatePicker1}
                display="spinner"
              />
            </View>
            <View>
              <DateTimePickerModal
                isVisible={showDatePicker2}
                mode="date"
                onConfirm={handleConfirm2}
                onCancel={hideDatePicker2}
                display="spinner"
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  function renderBalance() {
    return (
      <View
        style={{
          marginTop: -5,
          paddingHorizontal: SIZES.padding,
          paddingVertical: 10,
          backgroundColor: COLORS.white,
        }}
      >
        <Text style={{ ...FONTS.h2, color: "black", fontWeight: "bold" }}>
          Balance
        </Text>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>
            Begining balance
          </Text>
          <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>
            Ending balance
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text style={{ ...FONTS.h2, color: "black", fontWeight: "bold" }}>
            5,250,000
          </Text>
          <Text style={{ ...FONTS.h2, color: "black", fontWeight: "bold" }}>
            1,250,000
          </Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {Header()}
      <ScrollView>
        {renderDate()}
        {renderBalance()}
        <Tab.Navigator>
          <Tab.Screen name="Expense" component={ExpenseCategory} />
          <Tab.Screen name="Income" component={IncomeCategory} />
        </Tab.Navigator>
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
export default Expense_Income;
