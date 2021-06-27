import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { textColor } from "../../../api/constants";

const maxLength = 16;
export default function Headlines({ user }) {
  const name = user.firstName + " " + user.lastName;
  return (
    <View style={styles.headlineZone}>
      <Text style={styles.headline}>Hello,</Text>
      <Text style={[styles.headline, { fontSize: 40 }]}>
        {name.length > maxLength ? name.slice(0, maxLength) + "..." : name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headlineZone: {
    padding: 20,
  },
  headline: {
    color: textColor,
    fontSize: 30,
    fontWeight: "bold",
  },
});
