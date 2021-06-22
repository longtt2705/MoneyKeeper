import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView } from 'react-native';
import LimitOfCategory from "./Limits/limitOfCate";
import LimitOfWallet from "./Limits/limitOfWallet";

export default function Limit({navigation}){
    return (
        <ScrollView>
            <LimitOfWallet navigation={navigation}/>
            <LimitOfCategory navigation={navigation}/>
        </ScrollView>
    );
}