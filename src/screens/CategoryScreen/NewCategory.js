import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  backgroundColor,
  formBackgroundColor,
  textColorOnLightBg,
  inactiveColor,
} from "../../api/constants";
import MyInput from "../InputTransaction/MyInput";

const NewCategory = () => {
  const [title, setTitle] = useState("");

  const handleChangeTitle = (value) => {
    if (value.length < 20) setTitle(value);
  };
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
});
