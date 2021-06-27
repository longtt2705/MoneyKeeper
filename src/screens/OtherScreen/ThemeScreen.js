import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";
import { backgroundColor } from "../../api/constants";
function ThemeScreen() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnRed} onPress={console.log("theme")} />
    </View>
  );
}
export default ThemeScreen;
const styles = StyleSheet.create({
  container: {},
});
