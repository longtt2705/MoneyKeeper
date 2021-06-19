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
  return (
    <View style={styles.container}>
    {Header()}
    <Tab.Navigator>
      <Tab.Screen name="Expense" component={ExpenseCategory} />
      <Tab.Screen name="Income" component={IncomeCategory} />
    </Tab.Navigator>
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