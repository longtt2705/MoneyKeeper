import React, { useRef} from 'react';
import { backgroundColor } from "../../../api/constants";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Animated,
  Platform
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ExpenseCategory from './ExpenseCategoy';
import IncomeCategory from './IncomeCategory';
import { AntDesign } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
import { COLORS, FONTS, SIZES, icons, images } from '../../../api/index';
const report = ["Financial Statement", "Expense Income", "Expense Analysis", "Income Analysis"]
const Tab = createMaterialTopTabNavigator();

const Expense_Income=({navigation})=> {
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
                  defaultButtonText={report[1]}
                  buttonStyle={styles.dropdownButtonStyle}
                  buttonTextAfterSelection={() => {
                    return report[1]
                }}
                  dropdownIconPosition="right"
                  renderDropdownIcon={() => <AntDesign name="caretdown" size={12} color="#707070" />}
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
  function renderBalance(){
    return (
      <View style={{marginTop:-5,paddingHorizontal: SIZES.padding, paddingVertical:10, backgroundColor: COLORS.white }}>
             
             <Text style={{ ...FONTS.h2, color:'black',fontWeight:'bold' }}>Balance</Text>
          <View style={{ marginTop:10,flexDirection: 'row', justifyContent:'space-around' }}>
          <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>Begining balance</Text>
          <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>Ending balance</Text>
          </View>
          <View style={{ marginTop:10,flexDirection: 'row', justifyContent:'space-around' }}>
          <Text style={{ ...FONTS.h2, color:'black',fontWeight:'bold' }}>5,000,000</Text>
          <Text style={{ ...FONTS.h2, color:'black',fontWeight:'bold' }}>1,250,000</Text>
          </View>
      </View>
  )
  }
  return (
    <View style={styles.container}>
    {Header()}
    <ScrollView>
    {renderDate()}
    {renderBalance()}
    <Tab.Navigator>
      <Tab.Screen name="Expense" component={ExpenseCategory} />
      <Tab.Screen name="Income" component={IncomeCategory} />
    </Tab.Navigator>
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
export default Expense_Income;