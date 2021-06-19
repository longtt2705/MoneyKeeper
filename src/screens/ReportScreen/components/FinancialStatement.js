import React, { useCallback, useEffect, useState } from 'react';
import {Button, StyleSheet, Text, View , Platform,SafeAreaView, ScrollView,StatusBar,} from 'react-native';
import { backgroundColor } from "../../../api/constants";
import { AntDesign } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
const report = ["Financial Statement", "Expense Income", "Expense Analysis", "Income Analysis"]
const FinancialStatement=({navigation}) =>{
  function Header() {
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
              renderDropdownIcon={() => <AntDesign name="caretdown" size={12} color="#707070" />}
              defaultButtonText={report[0]}
              buttonStyle={styles.dropdownButtonStyle}
              buttonTextAfterSelection={() => {
                return report[0]
            }}
              dropdownStyle={styles.dropdownStyle}
              buttonTextStyle={styles.dropdownButtonTextStyle}
            />
        </View>
      )
}
    return (
        <View style={styles.container}>
          
            {Header()}
           <Text>FinancialStatement</Text>
           
        </View>
      );
  }
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  bgHeader: {
    backgroundColor: '#1A2C65',
    height:50,
    marginTop:-25,
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
export default FinancialStatement;