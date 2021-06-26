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
import icons from "../../api/categoryIcons"
import { itemBackgroundColor, highlightColor } from "../../api/constants"

const NewCategory = ({ route, navigation }) => {
  const { type } = route.params;
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const [color, setColor] = useState("");

  const handleChangeIcon = (icon, color) => {
    setIcon(icon);
    setColor(color);
  }

  const handleSubmit = () => {
    dispatch(addCategory(title, icon, type, color));
    setTitle("");
    setIcon("");
    setColor("");
    navigation.navigate("Category", {type});
  };

  const handleChangeTitle = (value) => {
    if (value.length < 20) setTitle(value);
  };

  // cái này là tạo categories trống để lấp đầy chỗ ở scrollView
  const tempIcon = [];
  let numOfTempIcon = (Object.keys(icons).length) % 3;
  if (numOfTempIcon == 2) {
    tempCategory.push(
      <View key={nanoid()} style={styles.tempIconItem}></View>
    );
  }

  const buttonDisable = !(Boolean(title) && Boolean(icon) && Boolean(color));

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
            {Object.keys(icons).map((key, index) => (
              <TouchableOpacity
                style={[styles.iconItem, (icon == icons[key].source) && styles.focusedIconItem]}
                key={index}
                onPress={() => {
                  handleChangeIcon(icons[key].source, icons[key].color);
                }}
                activeOpacity={1}
                >
                <Image source={icons[key].source || icons[key]} style={styles.icon} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <TouchableOpacity
          disabled={buttonDisable}
          style={[styles.submitButton,buttonDisable && styles.disabledButton ]}
          onPress={() => {
            handleSubmit();
          }}
        >
          <Text style={{ color: textColor, fontSize: 20 }}>Save</Text>
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
  focusedIconItem: {
    backgroundColor: formBackgroundColor,
    borderColor: highlightColor,
  },
  tempIconItem: {
    height: 60,
    width: "31%",
    marginBottom: 5,
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
    marginTop: 30,
    borderRadius: 15,
    backgroundColor: buttonColor,
  },
  disabledButton: {
    backgroundColor: inactiveColor,
  },
  iconContainer: {
    height: 150,
  }
});
