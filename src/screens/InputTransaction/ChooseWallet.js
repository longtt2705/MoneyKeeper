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

const ChooseWallet = ({ setWalletId, navigation }) => {
  const data = useSelector((state) => state.wallets.wallets);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.item, styles.padding]}
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
      <FlatList
        data={data}
        renderItem={renderItem}
        // ListHeaderComponent={ListHeader}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ChooseWallet;

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
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#000",
  },
  header: {
    backgroundColor: itemBackgroundColor,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
  balance: {
    fontSize: 20,
  },
  padding: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
