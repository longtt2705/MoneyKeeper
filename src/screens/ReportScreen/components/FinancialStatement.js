import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from "react-redux";
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
import { backgroundColor } from "../../../api/constants";
import { AntDesign } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
import { formatNumber } from '../../../api/helper';
import { COLORS, FONTS, SIZES, icons, images } from '../../../api/index';
const report = ["Financial Statement", "Expense Income", "Expense Analysis", "Income Analysis"]
const FinancialStatement=({ navigation}) =>{
  const listWallet = useSelector(state => state.wallets).wallets
  const transactions = useSelector(
    (state) =>
      state.wallets
  ).wallets;
  let sum =0;
  transactions.map(e=>sum=sum+e.balance);
  function Header() {
    return (
        <View style = {styles.bgHeader}>
            <SelectDropdown
              data={report}
              onSelect={(selectedItem, index) => {
      
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
 function renderFinancialRecent() {
  return (
    <View style={{ marginBottom:10,paddingHorizontal: SIZES.padding, paddingVertical: 10, backgroundColor: COLORS.white}}>


        <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>
            <Text style={{...FONTS.h2,fontWeight:'bold',color:COLORS.blue}}>FINANCIAL RECENT</Text>
        </View>
        <View style={{ marginTop:10,flexDirection: 'row', alignItems: 'center',justifyContent:'center' }}>
            <Text style={{...FONTS.h2,fontWeight:'bold'}}>{formatNumber(sum)} VND</Text>
        </View>
    </View>
)
 }
 function renderBudget() {
  return (
    <View style={{paddingHorizontal: SIZES.padding, paddingVertical: 10, backgroundColor: COLORS.white}}>


        <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>
        <Text style={{ ...FONTS.h2, color:'black',fontWeight:'bold' }}>Assets</Text>
        </View>
        <View style={{ marginTop:10,flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>
        <ScrollView>

                {
                    listWallet.map((element, index) => {
                        return (
                            <TouchableOpacity key={element.id}
                            >
                                <View style={styles.wallet}>
                                    <Image
                                        source={element.icon}
                                        style={styles.iconBudget}
                                    />
                                    <View style={styles.nameKind}>
                                        <Text style={styles.nameBudget}>
                                            {element.title}
                                        </Text>
                                    </View>
                                    <View style={styles.money}>
                                        <Text style={styles.valueOfMoney}>
                                            {formatNumber(element.balance)} VND
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                    )}

        </ScrollView>
        </View>
    </View>
)
 }
 function renderEmptyBudget() {
  return (
    <View style={{paddingHorizontal: SIZES.padding, paddingVertical: 10, backgroundColor: COLORS.white}}>


        <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>
        <Text style={{ ...FONTS.h2, color:'black',fontWeight:'bold' }}>Assets</Text>
        </View>
        <View style={{ marginTop:10,flexDirection: 'row', alignItems: 'center',justifyContent:'center' }}>
            <Text style={{...FONTS.h2,fontWeight:'bold'}}>No Wallet</Text>
        </View>
    </View>
)
 }
    return (
        <View style={styles.container}>
          
            {Header()}
           {renderFinancialRecent()}
           {
                    listWallet[0] === undefined &&
              <View>
                {renderEmptyBudget()}
              </View>
               
            }
            {
                    listWallet[0] !== undefined &&
              <View>
                {renderBudget()}
              </View>
               
            }

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
  nameKind: {
    width: "50%",
    display: 'flex',
    flexDirection: "column",
},
money: {
  display: 'flex',
  textAlign: "center",
  justifyContent: "center",
  marginLeft: 20,
},
wallet: {
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 10,
  marginTop: 5,
  justifyContent: "space-around"
},
valueOfMoney: {
  fontSize: 16,
  fontWeight: "bold"
},
iconBudget: {
  height: 50,
  width: 50,
  marginLeft: 16
},
nameBudget: {
  fontSize: 18,
  textAlign: "center",
  fontWeight: "bold"
},
});
export default FinancialStatement;