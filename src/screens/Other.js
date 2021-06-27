import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Image,
} from "react-native";
import { useSelector } from "react-redux";

import { backgroundColor, itemBackgroundColor } from "../api/constants";
export default function Other({ navigation }) {
  const user = useSelector((state) => state.user);
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.ScrollView}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.profile}>
          <TouchableHighlight
            style={styles.Account}
            onPress={() => {
              navigation.navigate("Account");
            }}
          >
            <View style={styles.alignImg}>
              <Image
                source={require("../../assets/image/profile.png")}
                style={styles.imgProfile}
              />
              <View>
                <Text style={styles.text}>
                  {user.firstName + " " + user.lastName}
                </Text>
                <Text style={styles.text1}>View/edit your profile</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
        <Text numberOfLines={1} style={styles.line}>
          ___________________________________________________________
        </Text>

        <View style={styles.feedback}>
          <TouchableHighlight
            style={styles.BtnFeedback}
            onPress={() => {
              navigation.navigate("Send feedback");
            }}
          >
            <View style={styles.alignImg}>
              <Image
                source={require("../../assets/image/exclamation-mark.png")}
                style={styles.img}
              />
              <View>
                <Text style={styles.text}>Send a feedback</Text>
                <Text style={styles.text1}>tell us what you think</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>

        <Text numberOfLines={1} style={styles.line}>
          ___________________________________________________________
        </Text>

        <View style={styles.exchange}>
          <TouchableHighlight
            style={styles.BtnChange}
            onPress={() => {
              console.log("done");
            }}
          >
            <View style={styles.alignImg}>
              <Image
                source={require("../../assets/image/wallet.png")}
                style={styles.img}
              />
              <Text style={styles.textExchange}>Exchange rates utility</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.Rating}>
          <TouchableHighlight
            style={styles.BtnRating}
            onPress={() => {
              navigation.navigate("Rating");
            }}
          >
            <View style={styles.alignImg}>
              <Image
                source={require("../../assets/image/star.png")}
                style={styles.img}
              />
              <Text style={styles.textRating}>Rating</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.Language}>
          <TouchableHighlight
            style={styles.BtnLanguage}
            onPress={() => {
              navigation.navigate("Language");
            }}
          >
            <View style={styles.alignImg}>
              <Image
                source={require("../../assets/image/translate.png")}
                style={styles.img}
              />
              <Text style={styles.textLanguage}>Language</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.Theme}>
          <TouchableHighlight
            style={styles.BtnTheme}
            onPress={() => {
              navigation.navigate("Theme");
            }}
          >
            <View style={styles.alignImg}>
              <Image
                source={require("../../assets/image/theme.png")}
                style={styles.img}
              />
              <Text style={styles.textTheme}>Theme</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.Settings}>
          <TouchableHighlight
            style={styles.BtnSettings}
            onPress={() => {
              console.log("done");
            }}
          >
            <View style={styles.alignImg}>
              <Image
                source={require("../../assets/image/setting.png")}
                style={styles.img}
              />
              <Text style={styles.textSettings}>Settings/LogOut</Text>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: backgroundColor,
    width: "100%",
  },
  ScrollView: {
    width: "100%",
    marginLeft: 20,
  },
  BtnChange: {
    backgroundColor: itemBackgroundColor,
    padding: 10,
    borderRadius: 15,
    marginTop: 5,
  },
  profile: {
    padding: 5,
    width: "95%",
    position: "relative",
    marginTop: 40,
  },
  Account: {
    backgroundColor: itemBackgroundColor,
    padding: 20,
    borderRadius: 15,
  },
  feedback: {
    padding: 5,
    width: "95%",
    position: "relative",
    marginTop: 10,
  },
  BtnFeedback: {
    backgroundColor: itemBackgroundColor,
    padding: 20,
    borderRadius: 15,
    marginTop: 5,
  },
  exchange: {
    padding: 5,
    width: "95%",
  },
  Rating: {
    padding: 5,
    width: "95%",
  },
  textRating: {
    fontSize: 25,
    color: "black",
  },
  BtnRating: {
    backgroundColor: itemBackgroundColor,
    padding: 10,
    borderRadius: 15,
    marginTop: 5,
  },
  Language: {
    padding: 5,
    width: "95%",
  },
  textLanguage: {
    fontSize: 25,
    color: "black",
  },
  BtnLanguage: {
    backgroundColor: itemBackgroundColor,
    padding: 10,
    borderRadius: 15,
    marginTop: 5,
  },
  Theme: {
    padding: 5,
    width: "95%",
  },
  textTheme: {
    fontSize: 25,
    color: "black",
  },
  BtnTheme: {
    backgroundColor: itemBackgroundColor,
    padding: 10,
    borderRadius: 15,
    marginTop: 5,
  },
  Settings: {
    padding: 5,
    width: "95%",
  },
  textSettings: {
    fontSize: 25,
    color: "black",
  },
  BtnSettings: {
    backgroundColor: itemBackgroundColor,
    padding: 10,
    borderRadius: 15,
    marginTop: 5,
  },
  text: {
    color: "black",
    fontSize: 35,
  },
  text1: {
    color: "black",
    fontSize: 18,
  },
  textExchange: {
    fontSize: 25,
    color: "black",
  },
  line: {
    color: "white",
    alignContent: "center",
  },
  imgFeedback: {
    width: 25,
    height: 25,
  },
  img: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  alignImg: {
    flexDirection: "row",
    alignItems: "center",
  },
  imgProfile: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
});
