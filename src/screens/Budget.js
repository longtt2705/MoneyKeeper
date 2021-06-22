import React,{useState} from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Limit from "../screens/Budget/LimitScreen/Limits";
import Wallet from "../screens/Budget/WalletScreen/Wallet/Wallet";
import Header from './Budget/LimitScreen/Limits/Header';
import AddLimitOfWallet from './Budget/LimitScreen/Limits/addLimitOfWallet';
import AddLimitOfCate from './Budget/LimitScreen/Limits/addLimitOfCategory';
import ChooseTypeOfBudget from './Budget/WalletScreen/Wallet/chooseTypeOfWallet';
import ChooseWallet from './Budget/WalletScreen/Wallet/chooseWallet';
import AddWallet from './Budget/WalletScreen/Wallet/addWallet';

import { primaryColor,backgroundColor, textColor } from "../api/constants";
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();


function Budget() {
  const limit=useSelector(state=>state.wallets).wallets;
  const limitNull=limit.filter(e=>e.limit===null);
  const [chooseWalletId,setChooseWalletId]=useState(limitNull[0].id);
  const [chooseType,setChooseType]=useState('Cash');

  return (
    <Stack.Navigator headerMode="screen" initialRouteName="limit">
      <Stack.Screen
        name="limit"
        options={{
          header: ({ scene, previous, navigation }) => (
            <Header
              navigation={navigation}
              scene={scene}
            />
          ),

          animationEnabled: false,
        }}
      >
        {({ navigation }) => (
          <Limit navigation={navigation}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="wallet"
        options={{
          header: ({ scene, previous, navigation }) => (
            <Header
              navigation={navigation}
              scene={scene}
            />
          ),
          animationEnabled: false,
        }}
      >
        {({navigation}) => (
          <Wallet navigation={navigation}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="addLimitWallet"
        options={{
          title: "Add Limit of Wallet",
          headerStyle: {
            backgroundColor: backgroundColor,
          },
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
        }}
      >
        {({ navigation }) => (
          <AddLimitOfWallet 
          navigation={navigation} 
          walletId={chooseWalletId} 
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="addLimitCate"
        options={{
          title: "Add Limit of Category",
          headerStyle: {
            backgroundColor: backgroundColor,
          },
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
        }}
      >
        {({ navigation }) => (
          <AddLimitOfCate navigation={navigation}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="addWallet"
        options={{
          title: "Add Wallet",
          headerStyle: {
            backgroundColor: backgroundColor,
          },
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
        }}
      >
        {({ navigation }) => (
          <AddWallet 
          navigation={navigation}
          chooseType={chooseType}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="chooseTypeBudget"
        options={{
          title: "Choose Type of Budget",
          headerStyle: {
            backgroundColor: backgroundColor,
          },
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
        }}
      >
        {({ navigation }) => (
          <ChooseTypeOfBudget 
          navigation={navigation}
          setChooseType={setChooseType}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="chooseWallet"
        options={{
          title: "Choose Wallet",
          headerStyle: {
            backgroundColor: backgroundColor,
          },
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
        }}
      >
        {({ navigation }) => (
          <ChooseWallet 
          navigation={navigation}
          setWalletId={setChooseWalletId}
          />
        )}
      </Stack.Screen>

    </Stack.Navigator>
  );
}

export default Budget;


