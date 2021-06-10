import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { itemBackgroundColor, textColor } from "../../../api/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Notifications() {
  return (
    <View style={styles.container}>
      <View style={styles.circleBadges}>
        <Text style={{ fontWeight: "bold", fontSize: 14, color: textColor }}>
          5
        </Text>
      </View>
      <MaterialCommunityIcons name="bell-outline" size={30} color={"#000"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    backgroundColor: itemBackgroundColor,
    width: 40,
    height: 40,
    position: "absolute",
    right: 20,
    top: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  circleBadges: {
    borderRadius: 50,
    backgroundColor: "red",
    width: 20,
    height: 20,
    position: "absolute",
    right: -5,
    top: -5,
    justifyContent: "center",
    alignItems: "center",
  },
});
