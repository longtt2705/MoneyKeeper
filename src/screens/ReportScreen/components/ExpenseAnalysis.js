import React, { useCallback, useEffect, useState } from 'react';
import {Button, StyleSheet, Text, View ,Image, Platform,SafeAreaView, ScrollView,StatusBar,} from 'react-native';
import { backgroundColor } from "../../../api/constants";
import { AntDesign } from '@expo/vector-icons';
import { COLORS, FONTS, SIZES, icons } from '../../../api/constantsR';
import SelectDropdown from 'react-native-select-dropdown';
const report = ["Financial Statement", "Expense Income", "Expense Analysis", "Income Analysis"]
const ExpenseAnalysis=({navigation})=> {
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
              defaultButtonText={report[2]}
              buttonStyle={styles.dropdownButtonStyle}
              buttonTextAfterSelection={() => {
                return report[2]
            }}
              dropdownStyle={styles.dropdownStyle}
              buttonTextStyle={styles.dropdownButtonTextStyle}
            />
        </View>
      )
}
  function renderDate() {
      return (
          <View style={{ paddingHorizontal: SIZES.padding, paddingVertical: 10, backgroundColor: COLORS.white}}>
  
  
              <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>
                  <View style={{
                      backgroundColor: COLORS.lightGray,
                      height: 50,
                      width: 50,
                      borderRadius: 25,
                      justifyContent: 'center',
                      alignItems: 'center'
                  }}>
                      <Image
                          source={icons.calendar}
                          style={{
                              width: 25,
                              height: 25,
                              tintColor: COLORS.lightBlue
                          }}
                      />
                  </View>
  
                  <View style={{ marginLeft:SIZES.padding }}>
                      
                      <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>01/11/2020 - 30/11/2020</Text>
                  </View>
              </View>
          </View>
      )
  }
  function renderTotalEstimate(){
    return (
      <View style={{ paddingHorizontal: SIZES.padding, paddingVertical: 10, backgroundColor: COLORS.white}}>


          <View style={{ flexDirection: 'row',justifyContent:'space-between'}}>

          <View style={{marginLeft:-15}}>
                  
                  <Text style={{ ...FONTS.h3, color: COLORS.secondary }}>Total Expense</Text>
              </View>
          
              <View>
                  
                  <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>1,000,000 VND</Text>
              </View>
          </View>
      </View>
  )
  }
  function renderAvangeEstimate(){
    return (
      <View style={{ paddingHorizontal: SIZES.padding, paddingVertical: 10, backgroundColor: COLORS.white}}>


          <View style={{ flexDirection: 'row',justifyContent:'space-between'}}>

          <View style={{marginLeft:-15}}>
                  
                  <Text style={{ ...FONTS.h3, color: COLORS.secondary }}>Avenge Expense</Text>
              </View>
          
              <View>
                  
                  <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>100,000 VND</Text>
              </View>
          </View>
      </View>
  )
  }
  return (
    
    <View style={styles.container}>
      {Header()}
      {renderDate()}
      {renderTotalEstimate()}
      {renderAvangeEstimate()}
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
export default ExpenseAnalysis;