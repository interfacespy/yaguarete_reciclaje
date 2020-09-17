import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import PasswordLabel from "./PasswordLabel";
import BtnIngresar from "./BtnIngresar";
import BtnRegistro from "./BtnRegistro";
import BtnOlvidoPassword from "./BtnOlvidoPassword";
import UserLabel from "./UserLabel";

function Login(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/Logos--011.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
      <UserLabel style={styles.userLabel}></UserLabel>
      <PasswordLabel style={styles.passwordLabel}></PasswordLabel>
      <BtnIngresar style={styles.btnIngresar}></BtnIngresar>

      <BtnRegistro
        style={styles.btnRegistro}
        navigation={props.navigation}
      ></BtnRegistro>

      <BtnOlvidoPassword style={styles.btnOlvidoPassword}></BtnOlvidoPassword>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(193,193,193,1)",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50%",
  },
  passwordLabel: {
    height: 40,
    width: Dimensions.get("window").width - 40,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 20,
  },
  btnIngresar: {
    height: 57,
    width: Dimensions.get("window").width - 40,
    backgroundColor: "rgba(198,0,33,1)",
    marginTop: 40,
  },
  btnRegistro: {
    height: 36,
    width: Dimensions.get("window").width - 40,
    marginTop: 40,
  },
  btnOlvidoPassword: {
    height: 36,
    width: Dimensions.get("window").width - 40,
  },
  image1: {
    width: Dimensions.get("window").width - 40,
    height: 100,
    alignSelf: "center",
  },
  userLabel: {
    height: 40,
    width: Dimensions.get("window").width - 40,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 40,
  },
});

export default Login;
