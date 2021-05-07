import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { itemBackgroundColor } from "../../../api/constants";
import { AntDesign } from "@expo/vector-icons";

export default function Picker({ value, setValue }) {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View style={styles.picker}>
        <RNPickerSelect
          value={value}
          placeholder={{}}
          onValueChange={(value) => {
            setValue(value);
          }}
          useNativeAndroidPickerStyle={false}
          style={styles}
          Icon={() => <AntDesign name="caretdown" size={12} color="#707070" />}
          items={[
            { label: "This month", value: "m" },
            { label: "This quarter", value: "q" },
            { label: "This year", value: "y" },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  picker: {
    backgroundColor: itemBackgroundColor,
    height: 30,
    borderRadius: 30,
  },
  inputAndroid: {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 16,
    alignSelf: "baseline",
    paddingVertical: 5,
    color: "#707070",
    paddingRight: 25,
  },
  inputIOS: {
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignSelf: "baseline",
    color: "#707070",
    paddingRight: 25, // to ensure the text is never behind the icon
  },
  iconContainer: {
    position: "absolute",
    top: 0,
    right: 8,
    bottom: 0,
    justifyContent: "center",
  },
});
