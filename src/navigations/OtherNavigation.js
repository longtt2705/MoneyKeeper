import React, { useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import ThemeScreen from "../screens/OtherScreen/ThemeScreen";
import OtherScreen from "../screens/Other";
import RatingScreen from "../screens/OtherScreen/RatingScreen";
import AccountScreen from "../screens/OtherScreen/AccountScreen";
import ReportScreen from "../screens/OtherScreen/ReportScreen";
import FeedbackScreen from "../screens/OtherScreen/FeedbackScreen";
import FeedbackAndReportScreen from "../screens/OtherScreen/FeedbackAndReport";
import LanguageScreen from "../screens/OtherScreen/LanguageScreen";
const Stack = createStackNavigator();
import { primaryColor } from "../api/constants";

function OtherNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Other"
        component={OtherScreen}
        options={{
          title: "Other",
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTitleStyle: { alignSelf: "center" },
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Language"
        component={LanguageScreen}
        options={{
          title: "Language",
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Theme"
        component={ThemeScreen}
        options={{
          title: "Theme",
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Rating"
        component={RatingScreen}
        options={{
          title: "Rating",
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: "Account",
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Report"
        component={ReportScreen}
        options={{
          title: "Report",
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Feedback"
        component={FeedbackScreen}
        options={{
          title: "Feedback",
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Send feedback"
        component={FeedbackAndReportScreen}
        options={{
          title: "Send Feedback",
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
export default OtherNavigation;
