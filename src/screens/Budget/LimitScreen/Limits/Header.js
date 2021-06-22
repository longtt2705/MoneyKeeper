import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Constants from "expo-constants";

import {
  backgroundColor,
  primaryColor,
  textColor,
  focusedColor, 
  textColorOnFocused,
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
              color:
                scene.route.name == "limit" ? textColorOnFocused : textColor,
              fontWeight:"bold"
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
              color:
                scene.route.name == "wallet" ? textColorOnFocused : textColor,
              fontWeight:"bold"
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
  },
  focus: {
    backgroundColor: focusedColor,
    color: textColorOnFocused,
  },
});