import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  itemBackgroundColor,
  backgroundColor,
  inactiveColor,
} from "../../api/constants";
import { deleteCategory } from "../../redux/slices/categoriesSlice";
import icons from "../../api/icons";

const CategoriesList = ({ route, navigation }) => {
  const [isDeleteCategory, setIsDeleteCategory] = useState(false);
  const { type } = route.params;
  const categories = useSelector((state) => state.categories);
  const filtedCategories = categories.filter(
    (category) => category.type == type
  );
  const dispatch = useDispatch();
  const deleteItem = (categoryId) => {
    dispatch(deleteCategory({ id: categoryId }));
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={[styles.item, styles.padding]}
          onPress={() => {
            navigation.navigate("NewCategory", { type: type });
          }}
          key={101}
        >
          <Text style={styles.title}>Add new category</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.item, styles.padding]}
          onPress={() => setIsDeleteCategory((prevState) => !prevState)}
          key={100}
        >
          <Text style={styles.title}>Delete Category</Text>
        </TouchableOpacity>

        {filtedCategories.map((category) => (
          <TouchableOpacity
            style={[styles.item, styles.padding]}
            key={category.id}
          >
            {isDeleteCategory && (
              <TouchableOpacity
                onPress={() => {
                  deleteItem(category.id);
                }}
              >
                <Image source={icons.remove} style={styles.deleteIcon} />
              </TouchableOpacity>
            )}
            <Image source={category.icon} style={styles.icon} />
            <Text style={[styles.title, { marginLeft: 20 }]}>
              {category.title}
            </Text>
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
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#707070",
  },
  icon: {
    width: 34,
    height: 34,
  },
  deleteIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
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
  padding: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
