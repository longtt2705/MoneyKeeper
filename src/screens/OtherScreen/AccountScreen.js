import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Avatar } from "react-native-paper";
import { backgroundColor, itemBackgroundColor } from "../../api/constants";
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
      <View style={styles.avatar}>
        <Image
          source={require("../../../assets/image/profile.png")}
          style={styles.imgAccount}
        />
      </View>

      <View style={styles.action}>
        <FontAwesome name="user-o" style={styles.icon} />
        <Text style={styles.textName}>First Name: </Text>
        <TextInput value={textFName} onChangeText={(text) => setFName(text)} />
      </View>

      <View style={styles.action}>
        <FontAwesome name="user-o" style={styles.icon} />
        <Text style={styles.textName}>Last Name: </Text>
        <TextInput value={textLName} onChangeText={(text) => setLName(text)} />
      </View>

      <View style={styles.action}>
        <FontAwesome name="user-o" style={styles.icon} />
        <Text style={styles.textName}>email: </Text>
        <TextInput
          value={textEmail}
          onChangeText={(text) => handleUser(text)}
        />
      </View>

      <View style={styles.action}>
        <FontAwesome name="user-o" style={styles.icon} />
        <Text style={styles.textName}>Phone number: </Text>
        <TextInput value={textPhone} onChangeText={(text) => setPhone(text)} />
      </View>

      <View style={styles.action}>
        <FontAwesome name="user-o" style={styles.icon} />
        <Text style={styles.textName}>Date of birth: </Text>
        <TextInput value={textDOB} onChangeText={(text) => setDOB(text)} />
      </View>

      <View style={styles.action}>
        <FontAwesome name="user-o" style={styles.icon} />
        <Text style={styles.textName}>Address: </Text>

        <TextInput value={textAd} onChangeText={(text) => setAd(text)} />
      </View>
      <View style={styles.action}>
        <FontAwesome name="user-o" style={styles.icon} />
        <Text style={styles.textName}>Career: </Text>
        <TextInput
          value={textCareer}
          onChangeText={(text) => setCareer(text)}
        />
      </View>

      <TouchableOpacity style={styles.touchStyle} onPress={handleSubmit}>
        <Text style={styles.text}>SAVE</Text>
      </TouchableOpacity>
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
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,

    paddingBottom: 5,
  },
  icon: {
    marginRight: 10,
    marginTop: 6,
  },
  textName: {
    marginTop: 4,
  },
  button: {
    padding: 20,
    marginTop: 6,
    width: "95%",
    borderRadius: 15,
    justifyContent: "center",
    backgroundColor: itemBackgroundColor,
  },
  touchStyle: {
    padding: 20,
    marginTop: 6,
    width: "95%",
    borderRadius: 15,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: itemBackgroundColor,
    marginLeft: 10,
  },
  text: {
    fontSize: 40,
    alignContent: "center",
    marginLeft: 120,
  },
  imgAccount: {
    width: 80,
    height: 80,
    alignContent: "center",
    marginTop: 10,
    marginLeft: 150,
  },
});
