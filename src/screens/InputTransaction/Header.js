import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Constants from "expo-constants";

import {
  backgroundColor,
  primaryColor,
  textColor,
  focusedColor,
  textColorOnFocused,
  buttonColor,
} from "../../api/constants";
import { back } from "react-native/Libraries/Animated/src/Easing";

const Header = ({ navigation, scene, setCategoryId }) => {
  if (scene)
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, scene.route.name == "expense" && styles.focus]}
          onPress={() => {
            setCategoryId("");
            navigation.navigate("expense");
          }}
        >
          <Text
            style={{
              color: textColor,
            }}
          >
            Expense
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, scene.route.name == "income" && styles.focus]}
          onPress={() => {
            setCategoryId("");
            navigation.navigate("income");
          }}
        >
          <Text
            style={{
              color: textColor,
            }}
          >
            Income
          </Text>
        </TouchableOpacity>
      </View>
    );
  else return <View></View>;
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: primaryColor,
    height: 100,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColor,
    color: textColor,
    width: 120,
    height: 30,
    borderRadius: 5,
  },
  focus: {
    backgroundColor: buttonColor,
  },
});
