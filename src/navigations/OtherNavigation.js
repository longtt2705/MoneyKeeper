import React, { useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import ThemeScreen from "../screens/OtherScreen/ThemeScreen";
import OtherScreen from '../screens/Other'
const Stack = createStackNavigator();


function OtherNavigation() {
    return(
       <Stack.Navigator>
            <Stack.Screen name = "Other" component = {OtherScreen}/>
            <Stack.Screen name = "Language" component = {ThemeScreen}/>
            <Stack.Screen name = "Theme" component = {ThemeScreen}/>
       </Stack.Navigator>
    );
}
export default OtherNavigation;