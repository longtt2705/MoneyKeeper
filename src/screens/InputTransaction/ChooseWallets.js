import React from "react";
import { useSelector } from "react-redux";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

import { itemBackgroundColor, backgroundColor } from "../../api/constants";

const ChooseWallets = ({ setWalletId, navigation }) => {
  const data = useSelector((state) => state.wallets.wallets);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        setWalletId(item.id);
        navigation.goBack();
      }}
    >
      <Text style={styles.title}>{item.title}</Text>
      <View>
        <Text style={styles.balance}> {item.balance}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default ChooseWallets;

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    flex: 1,
  },
  item: {
    backgroundColor: itemBackgroundColor,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#000",
  },
  title: {
    fontSize: 20,
  },
  balance: {
    fontSize: 20,
  },
});
