import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Headlines({ name }) {
  const maxLength = 16;
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
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
