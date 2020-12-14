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
  const [secure, setSecure] = useState(props.secure);
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
      <Text style={styles.slogan}>
        Registrate ahora para obtener los beneficios mañana
      </Text>
      <Text style={styles.nombre}>Nombre:</Text>
      <TxtName style={styles.txtName}></TxtName>
      <Text style={styles.apellido}>Ubicación:</Text>
      <RegistroMap></RegistroMap>
      <Text style={styles.eMail}>E-mail:</Text>
      <TxtCorreo style={styles.txtCorreo}></TxtCorreo>
      <Text style={styles.contrasena}>Contraseña:</Text>
      <View style={styles.txtPassword} secure={true}>
        <View style={[styles.containerPass, props.style]}>
          <TextInput
            style={styles.inputStyle}
            secureTextEntry={secure}
          ></TextInput>
          {props.secure && (
            <Icon
              style={styles.iconStyle}
              name={secure ? "eye" : "eye-off-outline"}
              size={20}
              color="gray"
              onPress={() => setSecure(!secure)}
            />
          )}
        </View>
      </View>
      <Text style={styles.confirmarPassword}>Confirmar Contraseña:</Text>
      <TxtConfirmPassword
        secure={true}
        style={styles.txtConfirmPassword}
      ></TxtConfirmPassword>
      <BtnRegistrar style={styles.btnRegistrar}></BtnRegistrar>
    </View>
  );
}

const styles = StyleSheet.create({
  containerRegistro: {
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
  containerButton: {
    backgroundColor: "rgba(255,255,255,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  registrarte: {
    color: "#c60021",
    fontSize: 14,
    fontFamily: "open-sans-700",
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
  containerPass: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
  },
  inputStyle: {
    color: "#000",
    paddingRight: 16,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 14,
    paddingBottom: 8,
    marginLeft: 15,
  },
  iconStyle: {
    color: "#616161",
    fontSize: 24,
    paddingRight: 8,
  },
});

export default Signin;
