import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const data = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
export default function AddTransaction() {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const hideDatePicker = () => {
    setShowDatePicker(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  return (
    <View style={styles.container}>
      {/* <View>
        <Button title="" />
      </View> */}

      <View style={styles.innerContainer}>
        <View style={styles.row}>
          <Text style={[styles.text, { width: 100 }]}>Date</Text>
          <Text onPress={openDatePicker}> {date.toISOString()}</Text>
          <DateTimePickerModal
            isVisible={showDatePicker}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>

        <View style={styles.row}>
          <Text style={[styles.text, { width: 100 }]}>Expense</Text>
          <TextInput
            style={[styles.input, { fontWeight: "bold" }]}
            value="3,000,000"
            textAlign={"center"}
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.row}>
          <Text style={[styles.text, { width: 100 }]}>Note</Text>
          <TextInput style={styles.input} />
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
      </View>

      <View style={styles.submitButton}>
        <Button color="#FE346E" title="Submit" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6A3D75",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  normalText: {
    color: "#fff",
    fontSize: 14,
  },
  input: {
    color: "#fff",
    backgroundColor: "#6A3D75",
    borderColor: "#707070",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 20,
    flex: 1,
  },
  innerContainer: {
    backgroundColor: "#42224A",
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
    alignSelf: "center",
    width: 100,
    marginTop: 20,
  },
});
