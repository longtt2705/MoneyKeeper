import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useEffect, useState } from "react";
import {
  backgroundColor,
  focusedColor,
  inactiveColor,
  primaryColor,
} from "../api/constants";
import { useSelector, useDispatch } from "react-redux";

import Budget from "../screens/Budget";
import Home from "../screens/HomeScreen/Home";
import Report from "../screens/ReportScreen/Report";
import InputNavigator from "./InputNavigator";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import RegistrationScreen from "../screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import { firebase } from "../firebase/config";
import { Text, View } from "react-native";
import OtherNavigation from "./OtherNavigation";
import { logIn } from "../redux/slices/userSlice";

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
          backgroundColor: primaryColor,
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
          tabBarLabel: "Dashboard",
        }}
      />
      <Tab.Screen
        name="Budget"
        component={Budget}
        options={{
          tabBarLabel: "Wallet",
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
          tabBarLabel: "Report",
        }}
      />
      <Tab.Screen
        name="Other"
        component={OtherNavigation}
        options={{
          tabBarLabel: "Others",
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
  // const [user, setUser] = useState(null);

  const userInfo = useSelector((state) => state.user);
  // console.log(userInfo);
  // console.log(userInfo.isLogedIn);
  // console.log("render", userInfo);

  const dispatch = useDispatch();

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
            // setUser(userData);
            dispatch(logIn(userData));
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
        {userInfo.isLogedIn ? (
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
