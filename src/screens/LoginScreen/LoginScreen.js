import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  backgroundColor,
  buttonColor,
  inactiveColor,
  primaryColor,
  textColor,
} from "../../api/constants";
import { firebase } from "../../firebase/config";
import { logIn } from "../../redux/slices/userSlice";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFooterLinkPress = () => {
    navigation.navigate("Registration");
  };

  const dispatch = useDispatch();

  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              alert("User does not exist anymore.");
              return;
            }
            const user = firestoreDocument.data();
            dispatch(logIn(user));
            // navigation.navigate("Main", { user });
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        style={styles.scrollContainer}
        keyboardShouldPersistTaps="always"
      >
        <Text style={styles.labelText}>Sign in</Text>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
        <Text style={styles.title}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your e-mail here..."
          placeholderTextColor={inactiveColor}
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <Text style={styles.title}>Password</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={inactiveColor}
          secureTextEntry
          placeholder="Type your password here..."
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
          <Text style={styles.buttonTitle}>Sign in</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Don't have an account?{" "}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Sign up
            </Text>
          </Text>
        </View>
        <View
          style={{
            marginTop: 30,
            height: Dimensions.get("screen").height * 0.2,
          }}
        >
          <ImageBackground
            source={require("../../assets/wave.png")}
            style={styles.imageBackground}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 20,
                marginTop: 25,
                fontWeight: "bold",
                color: primaryColor,
              }}
            >
              or connect with
            </Text>
            <View style={styles.connect}>
              <TouchableOpacity style={styles.buttonConnect}>
                <Image
                  style={styles.connectLogo}
                  source={require("../../assets/twitter.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonConnect}>
                <Image
                  style={styles.connectLogo}
                  source={require("../../assets/facebook.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonConnect}>
                <Image
                  style={styles.connectLogo}
                  source={require("../../assets/google.png")}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  labelText: {
    color: textColor,
    fontWeight: "bold",
    fontSize: 35,
    margin: 10,
    marginLeft: 20,
  },
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    alignItems: "center",
    backgroundColor: backgroundColor,
    justifyContent: "space-between",
  },
  scrollContainer: {
    width: "100%",
    flex: 1, //added flexGrow
  },
  title: {
    marginLeft: 30,
    color: textColor,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: primaryColor,
    color: textColor,
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: buttonColor,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: inactiveColor,
  },
  footerLink: {
    color: textColor,
    fontWeight: "bold",
    fontSize: 16,
  },
  logo: {
    alignSelf: "center",
  },
  connect: {
    alignSelf: "center",
    marginTop: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  connectLogo: {
    width: 30,
    height: 30,
  },
  buttonConnect: {
    backgroundColor: "white",
    borderRadius: 29,
    padding: 10,
    elevation: 10,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
