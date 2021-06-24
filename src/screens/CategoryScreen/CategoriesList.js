import React from "react";
import { useSelector } from "react-redux";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  itemBackgroundColor,
  backgroundColor,
  inactiveColor,
} from "../../api/constants";

const CategoriesList = ({ route, navigation }) => {
  const categories = useSelector((state) => state.categories);

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={[styles.item, styles.padding]}
          onPress={() => {
            navigation.navigate("NewCategory");
          }}
          key={0}
        >
          <Text style={styles.title}>Add new category</Text>
        </TouchableOpacity>
        {categories.map((category) => (
          <TouchableOpacity
            style={[styles.item, styles.padding]}
            key={category.id}
          >
            <Text style={styles.title}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    flex: 1,
  },
  item: {
    backgroundColor: itemBackgroundColor,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#707070",
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
