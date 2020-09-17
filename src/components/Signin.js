import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import TxtPassword from "./TxtPassword";
import TxtName from "./TxtName";
import TxtApellido from "./TxtApellido";
import TxtCorreo from "./TxtCorreo";
import TxtConfirmPassword from "./TxtConfirmPassword";
import BtnRegistrar from "./BtnRegistrar";

function Signin(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/Logos--012.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.nombre}>Nombre:</Text>
      <TxtName style={styles.txtName}></TxtName>
      <Text style={styles.apellido}>Apellido:</Text>
      <TxtApellido style={styles.txtApellido}></TxtApellido>
      <Text style={styles.eMail}>E-mail:</Text>
      <TxtCorreo style={styles.txtCorreo}></TxtCorreo>
      <Text style={styles.contrasena}>Contraseña:</Text>
      <TxtPassword style={styles.txtPassword}></TxtPassword>
      <Text style={styles.confirmarPassword}>Confirmar Contraseña:</Text>
      <TxtConfirmPassword
        style={styles.txtConfirmPassword}
      ></TxtConfirmPassword>
      <BtnRegistrar style={styles.btnRegistrar}></BtnRegistrar>
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
    marginTop: "30%",
  },
  image: {
    width: Dimensions.get("window").width - 40,
    height: 100,
    alignSelf: "center",
  },

  txtPassword: {
    height: 40,
    width: Dimensions.get("window").width - 40,
    backgroundColor: "#fff",
    marginTop: 10,
  },
  nombre: {
    fontFamily: "open-sans-700",
    color: "rgba(54,62,63,1)",
    width: Dimensions.get("window").width - 40,
    height: 16,
    marginTop: 20,
  },
  txtName: {
    height: 40,
    width: Dimensions.get("window").width - 40,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 10,
  },
  apellido: {
    fontFamily: "open-sans-700",
    color: "rgba(54,62,63,1)",
    marginTop: 20,
    width: Dimensions.get("window").width - 40,
  },
  txtApellido: {
    height: 40,
    width: Dimensions.get("window").width - 40,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 10,
  },
  txtCorreo: {
    height: 40,
    width: Dimensions.get("window").width - 40,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 10,
  },
  txtConfirmPassword: {
    height: 40,
    width: Dimensions.get("window").width - 40,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 10,
  },
  btnRegistrar: {
    height: 40,
    width: 150,
    marginTop: 20,
    alignSelf: "center",
  },

  eMail: {
    fontFamily: "open-sans-700",
    color: "rgba(54,62,63,1)",
    height: 16,
    width: Dimensions.get("window").width - 40,
    marginTop: 10,
  },
  contrasena: {
    fontFamily: "open-sans-700",
    color: "rgba(54,62,63,1)",
    height: 16,
    width: Dimensions.get("window").width - 40,
    marginTop: 10,
  },
  confirmarPassword: {
    fontFamily: "open-sans-700",
    color: "rgba(54,62,63,1)",
    width: Dimensions.get("window").width - 40,
    height: 19,
    marginTop: 10,
  },
});

export default Signin;
