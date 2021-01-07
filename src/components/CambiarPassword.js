import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import BtnCambiar from "./BtnCambiar";
import UserLabel from "./UserLabel";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function CambiarPassword(props) {
  return (
    <View style={{ flex: 1, backgroundColor: "#c60021" }}>
      <View style={styles.leftIconButton}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        >
          <Icon name="arrow-left" style={styles.icon} size={32}></Icon>
        </TouchableOpacity>
      </View>
      <View style={[styles.container, props.style]}>
        <Image
          source={require("../assets/images/logo-blanco.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
        <Text style={styles.slogan}>
          Ingresa tu e-mail, te enviaremos los pasos para restablecer tu
          contraseña
        </Text>
        <UserLabel style={styles.userLabel}></UserLabel>
        <BtnCambiar style={styles.btnCambiar}></BtnCambiar>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  icon: {
    color: "#FFF",
  },
  leftIconButton: {
    width: "10%",
    //backgroundColor: "rgba(255,255,255,1)",
    height: 50,
    marginLeft: 20,
    marginTop: 40,
  },
  container: {
    flex: 1,
    backgroundColor: "#c60021",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  slogan: {
    fontFamily: "open-sans-700",
    color: "#FFF",
    width: Dimensions.get("window").width - 40,
    height: 40,
    marginTop: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  userLabel: {
    height: 40,
    width: Dimensions.get("window").width - 40,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 40,
  },
  btnCambiar: {
    height: 57,
    width: Dimensions.get("window").width - 40,
    backgroundColor: "#FFF",
    marginTop: 40,
  },
  image1: {
    width: Dimensions.get("window").width - 40,
    height: 100,
    alignSelf: "center",
  },
});

export default CambiarPassword;
