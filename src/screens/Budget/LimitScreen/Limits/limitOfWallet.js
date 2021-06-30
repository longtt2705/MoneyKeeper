import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Navigator,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { backgroundColor, primaryColor } from "../../../../api/constants";
import AddLimitOfWallet from "./addLimitOfWallet";
import { useSelector } from "react-redux";
import icons from "../../../../api/icons";
import moment from "moment";

export default function LimitOfWallet({ navigation, setLimitId }) {
  const listofWallet = useSelector((state) => state.wallets).wallets;
  const limitWallet = listofWallet.filter((e) => e.limit !== null);
  if (limitWallet == null) {
    return (
      <View style={styles.bg}>
        <View style={styles.Cate}>
          <Text style={styles.nameCate}>Limit of Budgets</Text>
        </View>
        <View></View>
        <View style={styles.buttonCotainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("addLimitWallet");
            }}
          >
            <Text style={styles.buttonName}>Add Limit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.bg}>
        <View style={styles.Cate}>
          <Text style={styles.nameCate}>Limit of Budgets</Text>
        </View>
        <ScrollView>
          {limitWallet.map((element, index) => {
            return (
              <TouchableOpacity
                key={element.id}
                onPress={() => {
                  setLimitId(element.id);
                  navigation.navigate("updateLimitWallet");
                }}
              >
                <View style={styles.container}>
                  <Image source={icons.dollar} style={styles.icon} />
                  <View style={styles.nameDate}>
                    <Text style={styles.nameWallet}>{element.title}</Text>
                    <Text style={styles.date}>
                      {moment(element.datestart).format("DD/MM/YYYY")}-
                      {moment(element.dateend).format("DD/MM/YYYY")}
                    </Text>
                  </View>
                  <Text style={styles.money}>{element.limit} VND</Text>
                </View>
                <View style={styles.straightCotainer}>
                  <Text style={styles.straight}></Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.buttonCotainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("addLimitWallet");
            }}
          >
            <Text style={styles.buttonName}>Add Limit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "white",
  },
  Cate: {
    height: 50,
    backgroundColor: backgroundColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  nameCate: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    height: 70,
    marginTop: 15,
    justifyContent: "space-around",
  },
  nameDate: {
    display: "flex",
    flexDirection: "column",
    marginRight: 70,
    alignItems: "center",
    width: "34%",
  },
  money: {
    fontSize: 18,
    marginTop: 7,
    fontWeight: "bold",
    marginRight: 5,
  },
  nameWallet: {
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    fontSize: 10,
    textAlign: "center",
    color: "gray",
    fontWeight: "bold",
  },
  button: {
    alignContent: "center",
    color: "#fff",
    fontSize: 14,
    backgroundColor: backgroundColor,
    height: 35,
    width: "50%",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonName: {
    color: "white",
    fontSize: 20,
  },
  buttonCotainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  icon: {
    height: 50,
    width: 50,
    marginRight: 15,
    marginLeft: 10,
  },
  straightCotainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: -8,
    marginBottom: 9,
  },
  straight: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    height: 0,
    width: "70%",
    alignItems: "center",
  },
});
