import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import PasswordLabel from "./PasswordLabel";
import BtnIngresar from "./BtnIngresar";
import BtnRegistro from "./BtnRegistro";
import BtnOlvidoPassword from "./BtnOlvidoPassword";
import UserLabel from "./UserLabel";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import configData from "../../config.json";

function Login(props) {
  var [emailError, setEmailError] = useState("");
  var [passError, setPassError] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [editable, setEditable] = useState(true);

  if (editable) {
    setTimeout(() => {
      setEditable(true);
    }, 100);
  }

  var ingresar = () => {
    if (email == "") {
      setEmailError("Email es un campo requerido.");
    } else {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(email) === false) {
        setEmailError("La dirección de Email no es válida.");
      } else {
        setEmailError(null);
      }
    }
    if (password == "") {
      setPassError("Contraseña es un campo requerido.");
    } else {
      setPassError(null);
    }
    if (email != "" && password != "") {
      fetch(configData.SERVER_URL + "/res_partner/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          params: {
            mail: email,
            pass: password,
          },
        }),
      })
        .then((response) => response.json())
        .then((responseData) => {
          var response = responseData.result;
          if (response == 200) {
            alert("Bienvenido!");
            props.navigation.navigate("Home");
          } else {
            alert("Los datos no coinciden");
          }
          setEmail("");
          setPassword("");
        })
        .catch((error) => console.error(error))
        .done();
    }
  };

  return (
    <View>
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
        <UserLabel
          style={styles.userLabel}
          setEmail={setEmail}
          editable={editable}
        ></UserLabel>
        <Text style={{ color: "white" }}>{emailError}</Text>
        <PasswordLabel
          style={styles.passwordLabel}
          secure={true}
          setPassword={setPassword}
        ></PasswordLabel>
        <Text style={{ color: "white" }}>{passError}</Text>
        <BtnIngresar
          style={styles.btnIngresar}
          ingresar={ingresar}
        ></BtnIngresar>

        <BtnRegistro
          style={styles.btnRegistro}
          navigation={props.navigation}
        ></BtnRegistro>

        <BtnOlvidoPassword
          style={styles.btnOlvidoPassword}
          navigation={props.navigation}
        ></BtnOlvidoPassword>
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
  passwordLabel: {
    height: 40,
    width: Dimensions.get("window").width - 40,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 20,
  },
  btnIngresar: {
    height: 57,
    width: Dimensions.get("window").width - 40,
    backgroundColor: "#FFF",
    marginTop: 40,
  },
  btnRegistro: {
    height: 36,
    width: Dimensions.get("window").width - 40,
    marginTop: 40,
  },
  btnOlvidoPassword: {
    height: 60,
    width: Dimensions.get("window").width - 40,
  },
  image1: {
    width: Dimensions.get("window").width - 40,
    height: 100,
    alignSelf: "center",
    marginTop: "10%",
  },
  userLabel: {
    height: 40,
    width: Dimensions.get("window").width - 40,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 40,
  },
});

export default Login;
