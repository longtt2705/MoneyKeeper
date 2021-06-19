import React, { useCallback, useEffect, useState } from 'react';
import {Button, StyleSheet, Text, View , Platform,SafeAreaView, ScrollView,StatusBar,} from 'react-native';
import { backgroundColor } from "../../../api/constants";
import Header  from './Header';
export default function IncomeAnalysis() {
  
  return (
    
    <View style={styles.container}>
       <Text>IncomeAnalysis</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});