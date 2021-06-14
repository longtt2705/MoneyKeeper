import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

import {
  backgroundColor,
  primaryColor,
  textColor,
  focusedColor,
  formBackgroundColor,
  textColorOnLightBg,
  inactiveColor,
} from "../../api/constants";

const MyInput = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (value) => {
    props.onChangeText(value);
  };

  return (
    <TextInput
      {...props}
      style={[
        styles.input,
        { backgroundColor: isFocused ? "#fff" : inactiveColor },
      ]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onChangeText={(text) => handleChange(text)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    color: textColorOnLightBg,
    borderColor: "#707070",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 20,
    flex: 1,
  },
});

export default MyInput;
