import { black } from "chalk";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import {
  backgroundColor,
  primaryColor,
  Colors,
  textColorOnLightBg,
  inactiveColor,
} from "../../../../api/constants";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  updateWallet,
  deleteWallet,
} from "../../../../redux/slices/walletsSlice";
import icons from "../../../../api/icons";

export default function UpdateWallet({ navigation, walletId }) {
  const dispatch = useDispatch();
  const wallets = useSelector((state) => state.wallets.wallets);
  const element = wallets.filter((e) => e.id === walletId)[0];

  const [nameWallet, setNameWallet] = useState(element ? element.title : "");
  const handleNameWallet = (name) => {
    setNameWallet(name);
  };

  const [balance, setBalance] = useState(element ? element.balance : "");
  const handleBalance = (balance) => {
    if (!balance) {
      setBalance(0);
    } else setBalance(balance);
  };

  const [note, setNote] = useState(element ? element.note : "");
  const handleNote = (note) => {
    setNote(note);
  };

  const disableDelete = wallets.length <= 1;

  const handleDelete = (walletId) => {
    dispatch(deleteWallet({ walletId }));
    navigation.goBack();
  };
  if (!element) {
    return <View></View>;
  }

  return (
    <ScrollView style={styles.bg}>
      <View style={styles.container}>
        <View style={styles.element}>
          <View style={styles.nameCate}>
            <Image source={icons.name} style={styles.icon} />
            <View>
              <Text style={styles.name}>Name of Budget:</Text>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              value={nameWallet}
              style={styles.input}
              onChangeText={(text) => handleNameWallet(text)}
            />
          </View>
        </View>
        <View style={styles.element}>
          <View style={styles.nameCate}>
            <Image source={icons.balance} style={styles.icon} />
            <View>
              <Text style={styles.name}>Balance of Budget:</Text>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              value={balance.toString()}
              style={styles.input}
              onChangeText={(text) => handleBalance(parseInt(text))}
            />
          </View>
        </View>
        <View style={styles.element}>
          <View style={styles.nameCate}>
            <Image source={icons.pencil} style={styles.icon} />
            <View>
              <Text style={styles.name}>Note:</Text>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              value={note}
              style={styles.input}
              onChangeText={(text) => handleNote(text)}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonCotainer}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => {
            dispatch(
              updateWallet({
                walletId: element.id,
                title: nameWallet,
                balance: balance,
                note: note,
              })
            );
            navigation.goBack();
          }}
        >
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.delButton, disableDelete && styles.disabledDelButton]}
          onPress={() => {
            handleDelete(element.id);
          }}
          disabled={disableDelete}
        >
          <Text style={styles.delText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
  // if (element !== undefined) {

  // } else {
  //   return <View></View>;
  // }
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#fff",
  },
  container: {
    backgroundColor: "#fff",
  },
  element: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    marginBottom: 10,
  },
  icon: {
    height: 50,
    width: 50,
    marginLeft: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  nameCate: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    marginLeft: 15,
    fontWeight: "bold",
    fontSize: 17,
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    borderWidth: 0.5,
    width: "80%",
    height: 35,
    borderRadius: 10,
    textAlign: "center",
  },
  buttonCotainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    marginTop: 20,
  },
  saveButton: {
    alignContent: "center",
    color: "#fff",
    fontSize: 14,
    backgroundColor: Colors[51],
    height: 40,
    width: "40%",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  saveText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  delButton: {
    alignContent: "center",
    color: "#fff",
    fontSize: 14,
    backgroundColor: Colors[52],
    height: 40,
    width: "40%",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  disabledDelButton: {
    backgroundColor: inactiveColor,
  },
  delText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
