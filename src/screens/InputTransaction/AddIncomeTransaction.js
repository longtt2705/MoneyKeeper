import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
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
} from "../../api/constants";

import MyInput from "./MyInput";

const data = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
export default function AddIncomeTransaction() {
  const [date, setDate] = useState(new Date());
  const [moneyAmount, setMoneyAmount] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [note, setNote] = useState();

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
    setMoneyAmount(value);
  };

  const handleChangeNote = (value) => {
    setNote(value);
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
            style={[styles.input, styles.active, { textAlign: "center" }]}
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
          />
        </View>

        <View style={styles.row}>
          <Text style={[styles.text, { width: 100 }]}>Income</Text>
          <MyInput
            value={moneyAmount}
            textAlign={"center"}
            keyboardType="number-pad"
            onChange={handleChangeMoney}
          />
        </View>

        <View style={styles.row}>
          <Text style={[styles.text, { width: 100 }]}>Note</Text>

          <MyInput
            value={note}
            onChange={handleChangeNote}
            placeholder="enter note here"
          />
        </View>

        <View
          style={[styles.row, { height: 60, justifyContent: "space-between" }]}
        >
          <View style={styles.inputWithIcon}>
            <View style={styles.inputIcon}>
              <MaterialCommunityIcons name="wallet" size={34} color="#fff" />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.text}>Wallet</Text>
              <Text style={styles.text}>Cash</Text>
            </View>
          </View>

          <View style={styles.inputWithIcon}>
            <View style={styles.inputIcon}>
              <MaterialIcons name="update" size={34} color="#fff" />
            </View>
            <View style={{ flexDirection: "column", flex: 1 }}>
              <Text style={styles.text}>Event</Text>
              <Text style={styles.text}>None</Text>
            </View>
          </View>
        </View>

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
            {data.map((categoryItem, index) => (
              <View key={index} style={styles.categoryItem}>
                <View>
                  <MaterialCommunityIcons
                    name="wallet"
                    size={34}
                    color="#fff"
                  />
                </View>
                <Text style={styles.normalText}>Shopping</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.submitButton}>
          <Button color={backgroundColor} title="Submit" />
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
  },
  active: {
    backgroundColor: "#fff",
  },
  innerContainer: {
    backgroundColor: formBackgroundColor,
    paddingLeft: 20,
    paddingRight: 20,
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
    borderColor: "#707070",
    borderWidth: 1,
    borderRadius: 5,
    height: 70,
    width: 85,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButton: {
    overflow: "hidden",
    alignSelf: "center",
    width: 200,
    margin: 20,
    borderRadius: 5,
  },
});
