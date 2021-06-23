import React, { useCallback, useEffect, useState } from 'react';
import {Button, 
  StyleSheet, Text, View ,Image, Platform,SafeAreaView, ScrollView,StatusBar,  TouchableOpacity,
  FlatList,} from 'react-native';
import { backgroundColor } from "../../../api/constants";
import { AntDesign } from '@expo/vector-icons';
import { COLORS, FONTS, SIZES, icons } from '../../../api/constantsR';
import SelectDropdown from 'react-native-select-dropdown';
import Svg from 'react-native-svg';
import { VictoryTooltip,VictoryVoronoiContainer,VictoryBar, VictoryChart, VictoryTheme,VictoryAxis,VictoryLabel } from "victory-native";
const report = ["Financial Statement", "Expense Income", "Expense Analysis", "Income Analysis"]
const ExpenseAnalysis=({navigation})=> {
  let data={
    Expense:[
      { x: '01/11/2020', y: 13000 },
      { x: '02/11/2020', y: 16500 },
      { x: '03/11/2020', y: 14250 },
      { x: '04/11/2020', y: 19000 },
      { x: '05/11/2020', y: 13000 },
      { x: '06/11/2020', y: 16500 },
      { x: '07/11/2020', y: 0},
      { x: '08/11/2020', y: 19000 },
      { x: '09/11/2020', y:0 },
      { x: '10/11/2020', y:0 },
      { x: '11/11/2020', y:0 },
      { x: '12/11/2020', y:0 },
      { x: '13/11/2020', y:0 },
      { x: '14/11/2020', y:0 },
      { x: '15/11/2020', y:0 },
      { x: '16/11/2020', y:0 },
      { x: '17/11/2020', y:0 },
      { x: '18/11/2020', y:0 },
      { x: '19/11/2020', y:0 },
      { x: '20/11/2020', y:0 },
      { x: '21/11/2020', y:0 },
      { x: '22/11/2020', y:0 },
      { x: '23/11/2020', y:0 },
      { x: '24/11/2020', y:0 },
      { x: '25/11/2020', y:0 },
      { x: '26/11/2020', y:0 },
      { x: '27/11/2020', y:0 },
      { x: '28/11/2020', y:0 },
      { x: '29/11/2020', y:0 },
      { x: '30/11/2020', y:0 },
      { x: '31/11/2020', y:0 },


    ],
    Income:[
    ],
  };


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
              defaultButtonText={report[3]}
              buttonStyle={styles.dropdownButtonStyle}
              buttonTextAfterSelection={() => {
                return report[3]
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
                  
                  <Text style={{ ...FONTS.h3, color: COLORS.darkgreen }}>Total Income</Text>
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
                  
                  <Text style={{ ...FONTS.h3, color: COLORS.darkgreen }}>Avenge Income</Text>
              </View>
          
              <View>
                  
                  <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>100,000 VND</Text>
              </View>
          </View>
      </View>
  )
  }
  function renderChart() {
    return (<ScrollView horizontal={true}>
      <View style={{marginTop:15,marginBottom:15,backgroundColor: COLORS.white}}>
      
        <View style={{marginBottom:-30,marginTop:15}}>
                  
                  <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>Money(USD)</Text>
              </View>
        <VictoryChart domainPadding={20} width={1000} theme={VictoryTheme.material}
          containerComponent={
            <VictoryVoronoiContainer
              labels={({ datum }) => `${datum.y}$ \n ${datum.x}`}
              
              labelComponent={
                <VictoryTooltip cornerRadius={10} flyoutStyle={{ stroke: "white",fill: "white"}} style={{ fill: "green", backgroundColor:'white' }} constrainToVisibleArea />
              }
            />
            
          }
        >
          <VictoryAxis   style={{tickLabels: {fill:'white'}}}/>
          <VictoryAxis dependentAxis/>
           <VictoryBar  style={{data:{fill:COLORS.darkgreen},}} data={data.Expense}/>
        </VictoryChart>
        
      </View>
      </ScrollView>
  )   
  }
  function renderHistory() {

    return(
      <View style={{paddingHorizontal: SIZES.padding, paddingVertical: 10, backgroundColor: COLORS.white}}>
      <View style={{marginLeft:-10}}>      
        <Text style={{ ...FONTS.h2, color:'black',fontWeight:'bold' }}>History</Text>
        <FlatList
              data={data.Expense}
              renderItem={({item,index})=>(
                 item.y!=0?
                  <TouchableOpacity
                  style={{
                      flexDirection: 'row',
                      marginBottom:15,
                      height: 40,
                      paddingHorizontal: SIZES.radius,
                      borderRadius: 10,
                      backgroundColor: COLORS.white,
                      ...styles.shadow
                  }}
              >
                  {/* Name/Category */}
                  <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                      <View
                          style={{
                              width: 40,
                              height: 40,
                              backgroundColor: COLORS.darkgreen,
                              borderRadius: 25,
                              justifyContent: 'center',
                              alignItems: 'center'
                          }}
                      >
                        <Text style={{fontWeight:'bold',color:'white', ...FONTS.h2}}>{item.x.substring(0,2)}</Text>
                      </View>
        
                      <Text style={{ marginLeft: SIZES.base, color:COLORS.primary, ...FONTS.h3 }}>{item.x}</Text>
                  </View>
        
                  {/* Expenses */}
                  <View style={{ justifyContent: 'center' }}>
                      <Text style={{ color:COLORS.darkgreen, ...FONTS.h3 }}>{item.y} USD </Text>
                  </View>
              </TouchableOpacity>
                :null
               
              )}
              keyExtractor={item => `${item.x}`}
          />
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
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        {renderChart()}
        {renderHistory()}
      </ScrollView>
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