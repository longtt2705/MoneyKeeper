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
  navigation,
  walletId,
  handleSubmit,
}) {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const categories = useSelector((state) => state.categories);
  const expenseCategories = categories.filter((c) => c.type === "expense");

  const wallets = useSelector((state) => state.wallets.wallets);

  const currentWallet = wallets.find((wallet) => wallet.id == walletId);
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
      <View style={styles.innerContainer}>
        <View style={[styles.row, styles.margin]}>
          <Text style={[styles.text, { width: 100 }]}>Date</Text>
          <View
            style={[
              styles.input,
              styles.active,
              {
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <Text style={{ fontSize: 20 }} onPress={openDatePicker}>
              {moment(date).format("DD/MM/YYYY")}
            </Text>
          </View>
          <View>
            <DateTimePickerModal
              isVisible={showDatePicker}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              display="spinner"
            />
          </View>
        </View>

        <View
          style={{
            borderBottomColor: inactiveColor,
            borderBottomWidth: 1,
          }}
        />

        <View style={[styles.row, styles.margin]}>
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

        <View style={[styles.row, styles.margin]}>
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
          style={[
            styles.row,
            styles.margin,
            { height: 60, justifyContent: "space-between" },
          ]}
        >
          <TouchableOpacity
            style={[styles.inputWithIcon]}
            onPress={() => {
              navigation.navigate("chooseWallet");
            }}
          >
            <View style={styles.inputIcon}>
              <MaterialCommunityIcons name="wallet" size={34} color="#000" />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.text}>Wallet</Text>
              <Text style={styles.text}>{currentWallet.title}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.inputWithIcon}>
            <View style={styles.inputIcon}>
              <MaterialIcons name="update" size={34} color="#000" />
            </View>
            <View style={{ flexDirection: "column", flex: 1 }}>
              <Text style={styles.text}>Event</Text>
              <Text style={styles.text}>None</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            borderBottomColor: inactiveColor,
            borderBottomWidth: 1,
          }}
        />

        <View>
          <Text style={[styles.text, styles.margin]}>Category</Text>
          <ScrollView
            style={[styles.categoryContainer, styles.margin]}
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
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            handleSubmit();
          }}
        >
          <Text style={{ color: textColor, fontSize: 20 }}>Submit</Text>
        </TouchableOpacity>
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
  },
  margin: {
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
    borderColor: "#000",
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
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "center",
    width: 200,
    height: 40,
    marginBottom: 20,
    marginTop: 40,
    borderRadius: 5,
    backgroundColor: backgroundColor,
  },
});
