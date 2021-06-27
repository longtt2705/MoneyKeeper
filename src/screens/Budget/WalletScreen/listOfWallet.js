import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView } from 'react-native';
import Nav from '../LimitScreen/Limits/Navigator';
import Wallet from './Wallet/Wallet';

export default function ListOfWallet({navigation}){
    return (
        <ScrollView>
            <Wallet navigation={navigation}/>
        </ScrollView>
    );
}