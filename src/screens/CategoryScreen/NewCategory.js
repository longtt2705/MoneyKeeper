import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import {
  backgroundColor,
  formBackgroundColor,
  textColorOnLightBg,
  inactiveColor,
  buttonColor,
  textColor,
} from "../../api/constants";
import MyInput from "../InputTransaction/MyInput";
import { addCategory } from "../../redux/slices/categoriesSlice";
import icons from "../../api/constantsR/icons"
import {itemBackgroundColor} from "../../api/constants"

const NewCategory = ({ route }) => {
  const { type } = route.params;
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    dispatch(addCategory(title, "", type));
  };

  const handleChangeTitle = (value) => {
    if (value.length < 20) setTitle(value);
  };

  const buttonDisable = !Boolean(title);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={[styles.row, styles.margin]}>
          <Text style={[styles.text, { width: 100 }]}>Title</Text>
          <MyInput
            value={title}
            onChangeText={handleChangeTitle}
            returnKeyType="done"
          />
        </View>
        <View
          style={{
            borderBottomColor: inactiveColor,
            borderBottomWidth: 1,
          }}
        />
        <View>
          <Text style={[styles.text, styles.margin]}>Icon</Text>
          <ScrollView 
            style={[styles.iconContainer, styles.margin]}
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {Object.keys(icons).map((key) => (
              <TouchableOpacity style={styles.iconItem}>
                <Image source={icons[key].source || icons[key]} style={styles.icon}/>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <TouchableOpacity
          disabled={buttonDisable}
          style={buttonDisable ? styles.disabledButton : styles.submitButton}
          onPress={() => {
            handleSubmit();
          }}
        >
          <Text style={{ color: textColor, fontSize: 20 }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    flex: 1,
  },
  icon: {
    width: 34,
    height: 34
  },
  iconItem: {
    backgroundColor: itemBackgroundColor,
    borderColor: "#707070",
    borderWidth: 1,
    borderRadius: 5,
    height: 60,
    width: "31%",
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    paddingTop: 5,
    backgroundColor: formBackgroundColor,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
  },
  margin: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    color: textColorOnLightBg,
    fontSize: 20,
  },
  submitButton: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "center",
    width: "70%",
    height: 40,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: buttonColor,
  },
  disabledButton: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "center",
    width: "70%",
    height: 40,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: inactiveColor,
  },
  iconContainer: {
    height: 150,
  }
});
