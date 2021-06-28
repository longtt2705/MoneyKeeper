import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet, View } from "react-native";
import { formBackgroundColor, itemBackgroundColor } from "../../api/constants";
import { formatNumber } from "../../api/helper";

const RecentAddedItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: 2,
          width: "45%",
        }}
      >
        <Image source={item.icon} style={styles.icon} />
        <Text style={{ textAlign: "center" }}>{item.categoryTitle}</Text>
      </View>
      <Text style={{ marginRight: 2, width: "55%" }}>
        {formatNumber(item.moneyAmount.toString())} VND
      </Text>
    </TouchableOpacity>
  );
};

export default RecentAddedItem;

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
  item: {
    borderRadius: 5,
    width: 160,
    height: 70,
    backgroundColor: formBackgroundColor,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
