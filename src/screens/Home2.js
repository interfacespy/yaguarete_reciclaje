import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import TxtPassword from "./TxtPassword";
import TxtName from "./TxtName";
import TxtCorreo from "./TxtCorreo";
import TxtConfirmPassword from "./TxtConfirmPassword";
import BtnRegistrar from "./BtnRegistrar";
import RegistroMap from "./RegistroMap";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Signin(props) {
  var [name, setName] = useState([]);
  var [email, setEmail] = useState([]);
  var [password, setPassword] = useState([]);

  var userLogin = () => {
    if (email && password && name) {
      fetch("http://192.168.0.106:8069/res_partner/create", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          params: { mail: email, name: email, pass: password },
        }),
      })
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData);
        })
        .catch((error) => console.error(error))
        .done();
    }
  };

  return (
    <View style={[styles.container, props.style]}>
      <View>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          onPress={userLogin}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        >
          <Text>Pulsame</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c60021",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
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
  nombre: {
    fontFamily: "open-sans-700",
    color: "#FFF",
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
    color: "#FFF",
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
    color: "#FFF",
    height: 16,
    width: Dimensions.get("window").width - 40,
    marginTop: 10,
  },
  contrasena: {
    fontFamily: "open-sans-700",
    color: "#FFF",
    height: 16,
    width: Dimensions.get("window").width - 40,
    marginTop: 10,
  },
  confirmarPassword: {
    fontFamily: "open-sans-700",
    color: "#FFF",
    width: Dimensions.get("window").width - 40,
    height: 19,
    marginTop: 10,
  },
});

export default Signin;
