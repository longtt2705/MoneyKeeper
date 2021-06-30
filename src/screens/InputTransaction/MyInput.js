import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { inactiveColor, textColorOnLightBg } from "../../api/constants";

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
        {
          backgroundColor:
            isFocused || props.value.length > 0 ? "#fff" : inactiveColor,
        },
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
    paddingLeft: 10,
    paddingRight: 10,
    height: 35,
  },
});

export default MyInput;
