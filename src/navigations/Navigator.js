import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useEffect, useState } from "react";
import { backgroundColor, focusedColor, inactiveColor } from "../api/constants";

import Budget from "../screens/Budget";
import Home from "../screens/HomeScreen/Home";
import Report from "../screens/Report";
import Other from "../screens/Other";
import InputNavigator from "./InputNavigator";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import RegistrationScreen from "../screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import { firebase } from "../firebase/config";
import { Text, View } from "react-native";

const iconSize = 25;
const Tab = createMaterialTopTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Budget":
              iconName = focused ? "wallet" : "wallet-outline";
              break;
            case "Report":
              iconName = focused ? "file-chart" : "file-chart-outline";
              break;
            case "Other":
              iconName = focused
                ? "dots-horizontal-circle"
                : "dots-horizontal-circle-outline";
              break;
            case "Add":
              // tabBarLabel = false;
              return focused ? (
                <Ionicons
                  name="add-circle"
                  size={iconSize * 2}
                  color={color}
                  style={{
                    width: iconSize * 2,
                    height: iconSize * 2,
                    // alignSelf: "center",
                    bottom: 20,
                    right: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              ) : (
                <Ionicons
                  name="add-circle-outline"
                  size={iconSize * 2}
                  color={color}
                  style={{
                    width: iconSize * 2,
                    height: iconSize * 2,
                    // alignSelf: "center",
                    bottom: 20,
                    right: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              );
            default:
              break;
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons
              name={iconName}
              size={iconSize}
              color={color}
            />
          );
        },
      })}
      tabBarPosition="bottom"
      tabBarOptions={{
        style: {
          height: 60,
          justifyContent: "center",
          backgroundColor: backgroundColor,
          elevation: 10,
        },
        activeTintColor: focusedColor,
        inactiveTintColor: inactiveColor,
        showIcon: true,
        indicatorStyle: {
          top: 0,
          backgroundColor: focusedColor,
        },
        tabStyle: { margin: 0, padding: 0, marginTop: 5 },
        labelStyle: { textTransform: "capitalize" },
        iconStyle: { width: iconSize, height: iconSize },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Tổng quan",
        }}
      />
      <Tab.Screen
        name="Budget"
        component={Budget}
        options={{
          tabBarLabel: "Tài khoản",
        }}
      />
      <Tab.Screen
        name="Add"
        component={InputNavigator}
        options={{
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Report"
        component={Report}
        options={{
          tabBarLabel: "Báo cáo",
        }}
      />
      <Tab.Screen
        name="Other"
        component={Other}
        options={{
          tabBarLabel: "Khác",
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

const Navigator = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const usersRef = firebase.firestore().collection("users");
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setLoading(false);
            setUser(userData);
          })
          .catch((error) => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      ></View>
    );
  } else
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        {user ? (
          <Stack.Screen name="Main" component={BottomTabNavigator} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
        )}
      </Stack.Navigator>
    );
};

export default Navigator;
