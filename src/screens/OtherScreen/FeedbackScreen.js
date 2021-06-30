import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Image,
} from "react-native";
import {
  backgroundColor,
  itemBackgroundColor,
  primaryColor,
  buttonColor,
  textColor,
} from "../../api/constants";
const FeedbackScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Content:</Text>
      </View>
      <TextInput
        style={styles.line}
        placeholder={
          "----------------------------------------------------------------------------------------"
        }
      />
      <TextInput
        style={styles.line}
        placeholder={
          "----------------------------------------------------------------------------------------"
        }
      />
      <TextInput
        style={styles.line}
        placeholder={
          "----------------------------------------------------------------------------------------"
        }
      />
      <TextInput
        style={styles.line}
        placeholder={
          "----------------------------------------------------------------------------------------"
        }
      />
      <TextInput
        style={styles.line}
        placeholder={
          "----------------------------------------------------------------------------------------"
        }
      />
      <TextInput
        style={styles.line}
        placeholder={
          "----------------------------------------------------------------------------------------"
        }
      />
      <TextInput
        style={styles.line}
        placeholder={
          "----------------------------------------------------------------------------------------"
        }
      />
      <TextInput
        style={styles.line}
        placeholder={
          "----------------------------------------------------------------------------------------"
        }
      />

      <View style={styles.Feedback}>
        <TouchableHighlight
          style={styles.BtnFeedback}
          onPress={() => {
            navigation.navigate("Feedback");
          }}
        >
          <View style={styles.alignImg}>
            <Text style={styles.textStyle}>Send </Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: itemBackgroundColor,
  },
  line: {
    marginLeft: 20,
    padding: 10,
    color: "#000",
  },
  content: {
    marginTop: 40,
    color: "black",
    marginLeft: 25,
  },
  text: {
    fontSize: 20,
  },
  Feedback: {
    marginLeft: 10,
    padding: 5,
    width: "95%",
  },
  textStyle: {
    fontSize: 25,
    color: textColor,
  },
  BtnFeedback: {
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

  alignImg: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default FeedbackScreen;
