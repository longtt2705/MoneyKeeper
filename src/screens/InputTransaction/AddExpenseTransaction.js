import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  Modal,
  Image,
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
  buttonColor,
  itemBackgroundColor,
} from "../../api/constants";
import { useSelector } from "react-redux";
import { current, nanoid } from "@reduxjs/toolkit";

import MyInput from "./MyInput";
import SuccessMessage from "./SuccessMessage";
import RecentAddedItem from "./RecentAddedItem";
import { formatNumber } from "../../api/helper";

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
  eventId,
  handleSubmit,
}) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const buttonDisable = !(
    Boolean(Number(moneyAmount.replace(/,/g, ""))) &&
    Boolean(categoryId) &&
    !modalVisible
  );

  const categories = useSelector((state) => state.categories);
  const expenseCategories = categories.filter((c) => c.type === "expense");

  const wallets = useSelector((state) => state.wallets.wallets);
  const events = useSelector((state) => state.events);

  const currentWallet = wallets.find((wallet) => wallet.id == walletId);
  if (!currentWallet) {
    return null;
  }
  const currentEvent = events.find((event) => event.id == eventId);

  // cái này là tạo categories trống để lấp đầy chỗ ở scrollView
  const tempCategory = [];
  let numOfTempCategory = (expenseCategories.length + 1) % 3;
  if (numOfTempCategory == 2) {
    tempCategory.push(
      <View key={nanoid()} style={styles.tempCategoryItem}></View>
    );
  }

  // Recent added transaction
  let recentAdded = [];
  // console.log(wallets);
  wallets.forEach((wallet) => {
    wallet.transactions.forEach((transaction) => {
      const categoryOfTransaction = categories.find(
        (category) => category.id == transaction.categoryId
      );
      if (categoryOfTransaction.type == "expense") {
        const tempTransaction = { ...transaction };
        tempTransaction.icon = categoryOfTransaction.icon;
        tempTransaction.categoryTitle = categoryOfTransaction.title;
        recentAdded.push(tempTransaction);
      }
    });
  });

  recentAdded = recentAdded.reverse().slice(0, 5);

  const showModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 1500);
  };

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
    const formatedNumber = formatNumber(value);
    if (value.length < 15) setMoneyAmount(formatedNumber);
  };

  const handleChangeNote = (value) => {
    if (value.length < 255) setNote(value);
  };

  const handleChangeCategory = (categoryId) => {
    setCategoryId(categoryId);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <SuccessMessage />
      </Modal>

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
          <Text
            style={{ width: 30, textAlign: "center", marginLeft: 10 }}
          ></Text>
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
          <Text style={{ width: 30, textAlign: "center", marginLeft: 10 }}>
            VND
          </Text>
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
            <View
              style={{
                flexDirection: "column",
              }}
            >
              <Text style={styles.text}>Wallet</Text>
              <Text style={styles.text}>{currentWallet.title}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.inputWithIcon}
            onPress={() => {
              navigation.navigate("chooseEvent");
            }}
          >
            <View style={styles.inputIcon}>
              <MaterialIcons name="update" size={34} color="#000" />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.text}>Event</Text>
              <Text style={styles.text}>{currentEvent.title}</Text>
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
            {expenseCategories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.categoryItem,
                  category.id == categoryId && styles.focusedCategoryItem,
                ]}
                onPress={() => handleChangeCategory(category.id)}
                activeOpacity={1}
              >
                <Image source={category.icon} style={styles.icon} />

                <Text style={styles.normalText}>{category.title}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.categoryItem}
              onPress={() => {
                navigation.navigate("Category", { type: "expense" });
              }}
            >
              <Text style={styles.normalText}>Edit</Text>
            </TouchableOpacity>
            {tempCategory}
          </ScrollView>
        </View>
        <View
          style={{
            borderBottomColor: inactiveColor,
            borderBottomWidth: 1,
          }}
        />
        <TouchableOpacity
          disabled={buttonDisable}
          style={[styles.submitButton, buttonDisable && styles.disabledButton]}
          onPress={() => {
            showModal();
            handleSubmit("expense");
          }}
        >
          <Text style={{ color: textColor, fontSize: 20 }}>Save</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recentAdded}>
        <ScrollView horizontal={true}>
          {recentAdded.map((item, index) => (
            <RecentAddedItem
              item={item}
              key={index}
              onPress={() => {
                handleChangeMoney(item.moneyAmount.toString());
                handleChangeCategory(item.categoryId);
              }}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
  },
  margin: {
    marginLeft: 10,
    marginRight: 10,
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
    height: 35,
  },
  active: {
    backgroundColor: "#fff",
  },
  icon: {
    width: 34,
    height: 34,
  },
  innerContainer: {
    paddingTop: 5,
    backgroundColor: formBackgroundColor,
    borderRadius: 10,
  },
  inputWithIcon: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "45%",
    height: 60,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    paddingRight: 20,
  },
  inputIcon: {
    width: 40,
    marginRight: 20,
    marginLeft: 10,
  },
  categoryContainer: {
    height: 140,
  },
  categoryItem: {
    backgroundColor: itemBackgroundColor,
    borderColor: "#707070",
    borderWidth: 1,
    borderRadius: 5,
    height: 60,
    width: "31%",
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  focusedCategoryItem: {
    backgroundColor: formBackgroundColor,
    borderColor: highlightColor,
  },
  tempCategoryItem: {
    height: 60,
    width: "31%",
    marginBottom: 5,
  },
  submitButton: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "center",
    width: "70%",
    height: 40,
    marginBottom: 10,
    marginTop: 30,
    borderRadius: 15,
    backgroundColor: buttonColor,
  },
  disabledButton: {
    backgroundColor: inactiveColor,
  },
  recentAdded: {
    marginTop: 20,
    backgroundColor: primaryColor,
  },
});
