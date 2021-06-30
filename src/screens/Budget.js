import React, { useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Limit from "../screens/Budget/LimitScreen/Limits";
import Wallet from "../screens/Budget/WalletScreen/Wallet/Wallet";
import Header from './Budget/LimitScreen/Limits/Header';
import AddLimitOfWallet from './Budget/LimitScreen/Limits/addLimitOfWallet';
import AddLimitOfCate from './Budget/LimitScreen/Limits/addLimitOfCategory';
import ChooseWallet from './Budget/WalletScreen/Wallet/chooseWallet';
import AddWallet from './Budget/WalletScreen/Wallet/addWallet';
import UpdateWallet from "../screens/Budget/WalletScreen/Wallet/updateWallet"
import UpdateLimitOfWallet from './Budget/LimitScreen/Limits/updateLimitWallet';
import ChooseCate from './Budget/LimitScreen/Limits/chooseCate';
import UpdateLimitOfCategory from './Budget/LimitScreen/Limits/updateLimitCate';

import { primaryColor, backgroundColor, textColor } from "../api/constants";
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();


function Budget() {
  const limit = useSelector(state => state.wallets).wallets;
  const limitNull = limit.filter(e => e.limit === null)[0];
  const [chooseWalletId, setChooseWalletId] = useState(() => {
    if (limitNull !== undefined) {
      return limitNull.id
    } else return -1;
  }
  );

  const limitnoNull = limit.filter(e => e.limit !== null)[0];
  const [limitId, setLimitId] = useState(() => {
    if (limitnoNull !== undefined) {
      return limitnoNull.id
    } else return -1;

  })

  const [idWallet,setIdWallet]=useState(limit[0].id)
  const categories=useSelector(state=>state.categories)
  const cateNull=categories.filter(e=>e.limit===null)[0];

  const [cateId,setCateId]=useState(()=>{
    if (cateNull===undefined){
      return -1;
    }else return cateNull.id
  })

  const [idCateLimit,setCateLimit]=useState(categories[0].id)

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
          <Limit
            navigation={navigation}
            setLmId={setLimitId}
            setCateLimit={setCateLimit}
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
        {({ navigation }) => (
          <Wallet
            navigation={navigation}
            setidWallet={setIdWallet}

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
          <AddLimitOfCate 
          navigation={navigation}
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

      <Stack.Screen
        name="updateWallet"
        options={{
          title: "Update Wallet",
          headerStyle: {
            backgroundColor: backgroundColor,
          },
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
        }}
      >
        {({ navigation }) => (
          <UpdateWallet
            navigation={navigation}
            walletId={idWallet}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="updateLimitWallet"
        options={{
          title: "Update Limit of Budget",
          headerStyle: {
            backgroundColor: backgroundColor,
          },
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
        }}
      >
        {({ navigation }) => (
          <UpdateLimitOfWallet
            navigation={navigation}
            limitId={limitId}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="choosecate"
        options={{
          title: "Choose Category",
          headerStyle: {
            backgroundColor: backgroundColor,
          },
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
        }}
      >
        {({ navigation }) => (
          <ChooseCate
            navigation={navigation}
            setCateId={setCateId}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="updateLimitCate"
        options={{
          title: "Update Limit Of Category",
          headerStyle: {
            backgroundColor: backgroundColor,
          },
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
        }}
      >
        {({ navigation }) => (
          <UpdateLimitOfCategory
            navigation={navigation}
            idCateLimit={idCateLimit}
          />
        )}
      </Stack.Screen>

    </Stack.Navigator>
  );
}

export default Budget;


