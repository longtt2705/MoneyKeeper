import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
        <View style={[styles.row, styles.margin]}>
          <Text style={[styles.text, { width: 100 }]}>Icon</Text>
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
});
