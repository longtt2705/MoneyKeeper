import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { firebase } from "../firebase/config";

export default function Other({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Khác</Text>
      <Button
        title="PUSH"
        onPress={() => {
          firebase
            .auth()
            .signOut()
            .then(() => {
              navigation.navigate("Login", { screen: "Login" });
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      />
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
