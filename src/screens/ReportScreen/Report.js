import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { backgroundColor, primaryColor } from "../../api/constants";
import FinancialStatement from "./components/FinancialStatement";
import Expense_Income from "./components/Expense_Income";
import IncomeAnalysis from "./components/IncomeAnalysis";
import ExpenseAnalysis from "./components/ExpenseAnalysis";
import {
  createStackNavigator,
  NavagationContainer,
} from "@react-navigation/stack";
const Stack = createStackNavigator();
export default function Report({ navigation }) {
  return (
    <View style={styles.container}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#1A2C65",
            height: 60,
          },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            marginBottom: 30,
          },
          headerTitleAlign: "center",
        }}
        headerMode="none"
        initialRouteName="Expense Income"
      >
        <Stack.Screen
          name="Financial Statement"
          component={FinancialStatement}
        />
        <Stack.Screen name="Expense Income" component={Expense_Income} />
        <Stack.Screen name="Expense Analysis" component={ExpenseAnalysis} />
        <Stack.Screen name="Income Analysis" component={IncomeAnalysis} />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  bgHeader: {
    backgroundColor: "#1A2C65",
    height: 50,
  },
});
