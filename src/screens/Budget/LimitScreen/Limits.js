import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import LimitOfCategory from "./Limits/limitOfCate";
import LimitOfWallet from "./Limits/limitOfWallet";

export default function Limit({ navigation, setLmId,setCateLimit,setWalletId,setCateId }) {
    return (
        <ScrollView>
            <LimitOfWallet
                navigation={navigation}
                setLimitId={setLmId}
                setWalletId={setWalletId}
            />
            <LimitOfCategory 
            navigation={navigation} 
            setCateLimit={setCateLimit}
            setCateId={setCateId}
            />
        </ScrollView>
    );
}