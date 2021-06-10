import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Headlines({ name }) {
  return (
    <View style={styles.headlineZone}>
      <Text style={styles.headline}>Hello,</Text>
      <Text style={[styles.headline, { fontSize: 40 }]}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headlineZone: {
    padding: 20,
  },
  headline: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
