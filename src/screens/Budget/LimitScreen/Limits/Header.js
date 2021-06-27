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
} from "../../../../api/constants";
import { back } from "react-native/Libraries/Animated/src/Easing";

const Header = ({ navigation, scene }) => {
  if (scene)
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, scene.route.name == "limit" && styles.focus]}
          onPress={() => {
            navigation.navigate("limit");
          }}
        >
          <Text
            style={{
              color: textColor,
              fontWeight: "bold",
            }}
          >
            Limits
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, scene.route.name == "wallet" && styles.focus]}
          onPress={() => {
            navigation.navigate("wallet");
          }}
        >
          <Text
            style={{
              color: textColor,
              fontWeight: "bold",
            }}
          >
            Budgets
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
    color: textColor,
  },
});
