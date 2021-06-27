import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import {
  textColor,
  itemBackgroundColor,
  highlightColor,
} from "../../api/constants";

const SuccessMessage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require("../../assets/icons/checked.png")}
          style={styles.icon}
        />
        <Text style={styles.text}>Saved</Text>
      </View>
    </View>
  );
};

export default SuccessMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: 80,
  },
  innerContainer: {
    backgroundColor: itemBackgroundColor,
    // borderColor: highlightColor,
    // borderWidth: 1,
    width: 140,
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  icon: {
    width: 100,
    height: 100,
  },
  text: {
    color: highlightColor,
    fontSize: 20,
  },
});
