import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import YaguareteHeader from "../components/YaguareteHeader";
import Footer from "../components/Footer";
import RegistroMap from "../components/RegistroMap";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import configData from "../../config.json";

function RegistroPage(props) {
  const [secure, setSecure] = useState(props.secure);
  var [name, setName] = useState("");
  var [ubiError, setUbiError] = useState("");
  var [nameError, setNameError] = useState("");
  var [emailError, setEmailError] = useState("");
  var [passError, setPassError] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [confpassword, setConfPassword] = useState("");

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  var userLogin = () => {
    if (latitude == "" && longitude == "") {
      setUbiError("La ubicación es requerida");
    } else {
      setUbiError(null);
    }
    if (name == "") {
      setNameError("Nombre es un campo requerido.");
    } else {
      setNameError(null);
    }
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
      if (password != confpassword) {
        setPassError("Las contraseñas no coinciden.");
      } else {
        setPassError(null);
      }
    }
    if (email != "" && password != "" && name != "") {
      fetch(configData.SERVER_URL + "/res_partner/create", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          params: {
            mail: email,
            user: name,
            pass: password,
            latitud: latitude,
            longitud: longitude,
          },
        }),
      })
        .then((response) => response.json())
        .then((responseData) => {
          var response = responseData.result;
          if (response == 200) {
            alert("Usuario Creado");
            props.navigation.navigate("Home");
          } else {
            alert("No se ha podido crear el usuario");
          }
          setEmail("");
          setName("");
          setPassword("");
          setConfPassword("");
        })
        .catch((error) => console.error(error))
        .done();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.margenSeguridad}></View>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.header}>
            <YaguareteHeader
              style={styles.yaguareteHeader}
              navigation={props.navigation}
            ></YaguareteHeader>
          </View>
          <View style={styles.containerRegistro}>
            <Text style={styles.slogan}>
              Registrate ahora para obtener los beneficios mañana
            </Text>
            <Text style={styles.campo}>Nombre:</Text>
            <View style={styles.input}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => setName(text)}
              ></TextInput>
            </View>
            <Text style={{ color: "white" }}>{nameError}</Text>
            <Text style={styles.campo}>Ubicación:</Text>
            <RegistroMap
              setLatitude={setLatitude}
              setLongitude={setLongitude}
            ></RegistroMap>
            <Text style={{ color: "white" }}>{ubiError}</Text>
            <Text style={styles.campo}>E-mail:</Text>
            <View style={styles.input}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => setEmail(text)}
                value={email}
              ></TextInput>
            </View>
            <Text style={{ color: "white" }}>{emailError}</Text>
            <Text style={styles.campo}>Contraseña:</Text>
            <View style={styles.input}>
              <View style={styles.containerPass} secure={true}>
                <TextInput
                  style={styles.inputStyle}
                  secureTextEntry={true}
                  onChangeText={(text) => setPassword(text)}
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
            <Text style={{ color: "white" }}>{passError}</Text>
            <Text style={styles.campo}>Confirmar Contraseña:</Text>
            <View style={styles.input}>
              <View style={styles.containerPass} secure={true}>
                <TextInput
                  style={styles.inputStyle}
                  secureTextEntry={true}
                  onChangeText={(text) => setConfPassword(text)}
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
            <TouchableOpacity
              style={[styles.containerButton, props.style]}
              onPress={userLogin}
            >
              <Text style={styles.registrarte}>REGISTRARTE</Text>
            </TouchableOpacity>
          </View>
          <Footer></Footer>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPass: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    color: "#616161",
    fontSize: 24,
    paddingRight: 8,
  },
  containerRegistro: {
    flex: 1,
    backgroundColor: "#c60021",
    alignItems: "center",
  },
  slogan: {
    fontFamily: "open-sans-700",
    color: "#FFF",
    width: Dimensions.get("window").width - 40,
    height: 40,
    marginTop: 20,
    marginBottom: 20,
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
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 20,
  },
  registrarte: {
    color: "#c60021",
    fontSize: 14,
    fontFamily: "open-sans-700",
  },
  input: {
    height: 40,
    width: Dimensions.get("window").width - 40,
    backgroundColor: "rgba(255,255,255,1)",
  },
  campo: {
    fontFamily: "open-sans-700",
    color: "#FFF",
    width: Dimensions.get("window").width - 40,
    height: 16,
    marginBottom: 10,
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
  container: {
    flex: 1,
    backgroundColor: "#c60021",
  },
  scrollArea: {
    width: Dimensions.get("window").width,
    marginTop: 0,
  },
  scrollArea_contentContainerStyle: {
    width: Dimensions.get("window").width,
  },
  signin: {
    width: Dimensions.get("window").width,
  },
  margenSeguridad: {
    height: "3%",
    backgroundColor: "rgba(255,255,255,1)",
  },
  header: {
    width: Dimensions.get("window").width,
    height: 100,
    backgroundColor: "#c60021",
  },
  yaguareteHeader: {
    height: 100,
    width: Dimensions.get("window").width,
    backgroundColor: "#c60021",
  },
});

export default RegistroPage;
