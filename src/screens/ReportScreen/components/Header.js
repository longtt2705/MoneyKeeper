import { itemBackgroundColor } from "../../../api/constants";
import {StyleSheet, Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import React, { useCallback, useEffect, useState } from "react";
import { color } from "react-native-reanimated";
import { BorderlessButton } from "react-native-gesture-handler";
import { Component } from "react";
//<Text style = { headerStyle }>{props.headerText}</Text>
//make a Component


const report = ["FinancialStatement", "Expense_Income", "ExpenseAnalysis", "IncomeAlysis"]
export default function Header({navigation}){
  
    return (
      <View style = {styles.bgHeader}>
          <SelectDropdown
            data={report}
            onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
            navigation.navigate(selectedItem)
            }}
            rowTextForSelection={(item, index) => {return item
            }}
            buttonStyle={styles.dropdownButtonStyle}
            dropdownStyle={styles.dropdownStyle}
            buttonTextStyle={styles.dropdownButtonTextStyle}
          />
      </View>
    );
  
}
  


const styles = StyleSheet.create({
  bgHeader: {
    backgroundColor: '#1A2C65',
    height:50,
  },
  headerStyle: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  dropdown:{
    width:210,
    height:35,
    alignSelf:"center",
    borderRadius:40,
    marginTop:7,
  },
  dropdownButtonStyle:{
    width:210,
    height:35,
    alignSelf:"center",
    borderRadius:40,
    marginTop:7,
  },
  dropdownStyle:{
    width:210,
    marginTop:-30
  },
  dropdownButtonTextStyle:{
    fontSize:18,
    fontWeight:'bold'
  },

});
