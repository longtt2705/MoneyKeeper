import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Other({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Khác</Text>
      <Button onPress={handleAddWallet} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
