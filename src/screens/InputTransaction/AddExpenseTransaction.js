import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import moment from "moment";
import Constants from "expo-constants";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  backgroundColor,
  primaryColor,
  textColor,
  focusedColor,
  formBackgroundColor,
  textColorOnLightBg,
  inactiveColor,
  highlightColor,
} from "../../api/constants";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import MyInput from "./MyInput";

export default function AddExpenseTransaction({
  date,
  setDate,
  moneyAmount,
  setMoneyAmount,
  categoryId,
  setCategoryId,
  note,
  setNote,
}) {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const categories = useSelector((state) => state.categories);
  const expenseCategories = categories.filter((c) => c.type === "expense");

  // cái này là tạo categories trống để lấp đầy chỗ ở scrollView
  const tempCategory = [];
  let numOfTempCategory = (expenseCategories.length + 1) % 3;
  if (numOfTempCategory == 2) {
    tempCategory.push(
      <View key={nanoid()} style={styles.tempCategoryItem}></View>
    );
  }

  const hideDatePicker = () => {
    setShowDatePicker(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const handleChangeMoney = (value) => {
    if (value.length < 15) setMoneyAmount(value);
  };

  const handleChangeNote = (value) => {
    if (value.length < 255) setNote(value);
  };

  const handleChangeCategory = (categoryId) => {
    setCategoryId(categoryId);
  };

  return (
    <View style={styles.container}>
      {/* <View>
        <Button title="" />
      </View> */}

      <View style={styles.innerContainer}>
        <View style={styles.row}>
          <Text style={[styles.text, { width: 100 }]}>Date</Text>

          <Text
            style={[
              styles.input,
              styles.active,
              {
                textAlign: "center",
                fontSize: 20,
                textAlignVertical: "center",
              },
            ]}
            onPress={openDatePicker}
          >
            {moment(date).format("DD/MM/YYYY")}
          </Text>

          <DateTimePickerModal
            isVisible={showDatePicker}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            display="spinner"
            style={{ color: "#000" }}
          />
        </View>

        <View
          style={{
            borderBottomColor: inactiveColor,
            borderBottomWidth: 1,
          }}
        />

        <View style={styles.row}>
          <Text style={[styles.text, { width: 100 }]}>Expense</Text>
          <MyInput
            value={moneyAmount}
            textAlign={"center"}
            keyboardType="number-pad"
            onChangeText={handleChangeMoney}
            returnKeyType="done"
          />
        </View>

        <View
          style={{
            borderBottomColor: inactiveColor,
            borderBottomWidth: 1,
          }}
        />

        <View style={styles.row}>
          <Text style={[styles.text, { width: 100 }]}>Note</Text>
          <MyInput
            value={note}
            onChangeText={handleChangeNote}
            placeholder="enter note here"
            returnKeyType="done"
          />
        </View>

        <View
          style={{
            borderBottomColor: inactiveColor,
            borderBottomWidth: 1,
          }}
        />

        <View
          style={[styles.row, { height: 60, justifyContent: "space-between" }]}
        >
          <View style={styles.inputWithIcon}>
            <View style={styles.inputIcon}>
              <MaterialCommunityIcons name="wallet" size={34} color="#000" />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.text}>Wallet</Text>
              <Text style={styles.text}>Cash</Text>
            </View>
          </View>

          <View style={styles.inputWithIcon}>
            <View style={styles.inputIcon}>
              <MaterialIcons name="update" size={34} color="#000" />
            </View>
            <View style={{ flexDirection: "column", flex: 1 }}>
              <Text style={styles.text}>Event</Text>
              <Text style={styles.text}>None</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            borderBottomColor: inactiveColor,
            borderBottomWidth: 1,
          }}
        />

        <View>
          <Text style={styles.text}>Category</Text>
          <ScrollView
            style={styles.categoryContainer}
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {expenseCategories.map((category, index) =>
              category.id == categoryId ? (
                <TouchableOpacity
                  key={index}
                  style={styles.focusedCategoryItem}
                  onPress={() => handleChangeCategory(category.id)}
                >
                  <View>
                    <MaterialCommunityIcons
                      name="wallet"
                      size={34}
                      color="#000"
                    />
                  </View>
                  <Text style={styles.normalText}>{category.title}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  key={index}
                  style={styles.categoryItem}
                  onPress={() => handleChangeCategory(category.id)}
                  activeOpacity={1}
                >
                  <View>
                    <MaterialCommunityIcons
                      name="wallet"
                      size={34}
                      color="#000"
                    />
                  </View>
                  <Text style={styles.normalText}>{category.title}</Text>
                </TouchableOpacity>
              )
            )}
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.normalText}>Edit</Text>
            </TouchableOpacity>
            {tempCategory}
          </ScrollView>
        </View>
        <View style={styles.submitButton}>
          <Button color={textColor} title="Submit" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    color: textColorOnLightBg,
    fontSize: 20,
  },
  normalText: {
    color: textColorOnLightBg,
    fontSize: 14,
  },
  input: {
    color: textColorOnLightBg,
    backgroundColor: inactiveColor,
    borderColor: "#707070",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 20,
    flex: 1,
    height: 40,
  },
  active: {
    backgroundColor: "#fff",
  },
  innerContainer: {
    backgroundColor: formBackgroundColor,
  },
  inputWithIcon: {
    alignItems: "center",
    width: "45%",
    borderColor: "#707070",
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
  },
  inputIcon: {
    width: 30,
    marginRight: 20,
    marginLeft: 10,
  },
  categoryContainer: {
    height: 160,
  },
  categoryItem: {
    borderColor: inactiveColor,
    borderWidth: 1,
    borderRadius: 5,
    height: 65,
    width: 115,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  focusedCategoryItem: {
    borderColor: highlightColor,
    borderWidth: 1,
    borderRadius: 5,
    height: 65,
    width: 115,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  tempCategoryItem: {
    height: 65,
    width: 115,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButton: {
    overflow: "hidden",
    alignSelf: "center",
    width: 200,
    marginBottom: 20,
    marginTop: 40,
    borderRadius: 5,
    backgroundColor: backgroundColor,
  },
});
