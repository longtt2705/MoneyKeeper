import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Avatar } from "react-native-paper";
import {
  backgroundColor,
  itemBackgroundColor,
  primaryColor,
  buttonColor,
  textColor,
} from "../../api/constants";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/slices/userSlice";

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState("");
  const oldUserInfo = useSelector((state) => state.user);
  const [textEmail, setText] = useState(oldUserInfo.email);
  const [textFName, setFName] = useState(oldUserInfo.firstName);
  const [textLName, setLName] = useState(oldUserInfo.lastName);
  const [textPhone, setPhone] = useState(oldUserInfo.phone);
  const [textDOB, setDOB] = useState(oldUserInfo.DOB);
  const [textAd, setAd] = useState(oldUserInfo.address);
  const [textCareer, setCareer] = useState(oldUserInfo.career);
  const handleUser = (value) => {
    setText(value);
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(
      updateUser({
        firstName: textFName,
        lastName: textLName,
        email: textEmail,
        address: textAd,
        career: textCareer,
        DOB: textDOB,
        phone: textPhone,
      })
    );
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.avatar}>
          <Image
            source={require("../../../assets/image/profile.png")}
            style={styles.imgAccount}
          />
          <View style={styles.action}>
            <Text style={styles.textAvatar}>
              {oldUserInfo.firstName + " " + oldUserInfo.lastName}
            </Text>
          </View>
        </View>

        <View style={styles.action}>
          <Text style={styles.textName}>First Name: </Text>
          <TextInput
            style={styles.textInput}
            value={textFName}
            onChangeText={(text) => setFName(text)}
          />
        </View>

        <View style={styles.action}>
          <Text style={styles.textName}>Last Name: </Text>
          <TextInput
            style={styles.textInput}
            value={textLName}
            onChangeText={(text) => setLName(text)}
          />
        </View>

        <View style={styles.action}>
          <Text style={styles.textName}>Email: </Text>
          <TextInput
            style={styles.textInput}
            value={textEmail}
            onChangeText={(text) => handleUser(text)}
          />
        </View>

        <View style={styles.action}>
          <Text style={styles.textName}>Phone number: </Text>
          <TextInput
            style={styles.textInput}
            value={textPhone}
            onChangeText={(text) => setPhone(text)}
          />
        </View>

        <View style={styles.action}>
          <Text style={styles.textName}>Date of birth: </Text>
          <TextInput
            style={styles.textInput}
            value={textDOB}
            onChangeText={(text) => setDOB(text)}
          />
        </View>

        <View style={styles.action}>
          <Text style={styles.textName}>Address: </Text>

          <TextInput
            style={styles.textInput}
            value={textAd}
            onChangeText={(text) => setAd(text)}
          />
        </View>
        <View style={styles.action}>
          <Text style={styles.textName}>Career: </Text>
          <TextInput
            style={styles.textInput}
            value={textCareer}
            onChangeText={(text) => setCareer(text)}
          />
        </View>
        <TouchableOpacity style={styles.touchStyle} onPress={handleSubmit}>
          <Text style={styles.text}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  action: {
    flexDirection: "row",

    backgroundColor: itemBackgroundColor,
    padding: 9,
    marginTop: 1,
  },
  icon: {
    marginRight: 10,
    marginTop: 6,
  },
  textName: {
    marginTop: 4,
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    padding: 20,
    marginTop: 6,
    width: "95%",
    borderRadius: 15,
    justifyContent: "center",
    backgroundColor: backgroundColor,
  },
  touchStyle: {
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
  text: {
    fontSize: 20,
    color: textColor,
  },
  imgAccount: {
    width: 80,
    height: 80,
    marginTop: 10,
  },
  avatar: {
    alignItems: "center",
    backgroundColor: itemBackgroundColor,
  },
  textAvatar: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textInput: {
    fontSize: 20,
    marginTop: 3,
  },
});
