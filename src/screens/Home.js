import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Footer from "../components/Footer";

function Untitled(props) {
  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.margenSeguridad}></View>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.header}>
            <Image
              source={require("../assets/images/logo-blanco.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </View>
          <View style={styles.container}>
            <View style={styles.groupRow}>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={[styles.buttonContainer, props.style]}
                  onPress={() => {
                    props.navigation.navigate("Inicio");
                  }}
                >
                  <Icon name="home-outline" style={styles.icon}></Icon>
                  <Text style={styles.title}>Inicio</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={[styles.buttonContainer, props.style]}
                  onPress={() => {
                    props.navigation.navigate("Quienes Somos");
                  }}
                >
                  <Icon name="domain" style={styles.icon}></Icon>
                  <Text style={styles.title}>Quiénes Somos</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={[styles.buttonContainer, props.style]}
                  onPress={() => {
                    props.navigation.navigate("Puntos de Compras");
                  }}
                >
                  <Icon name="map-marker-radius" style={styles.icon}></Icon>
                  <Text style={styles.title}>Puntos de Compras</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.groupRow}>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={[styles.buttonContainer, props.style]}
                  onPress={() => {
                    props.navigation.navigate("Materiales que Reciclamos");
                  }}
                >
                  <MaterialCommunityIconsIcon
                    name="package-variant"
                    style={styles.icon}
                  ></MaterialCommunityIconsIcon>
                  <Text style={styles.title}>Materiales que Reciclamos</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={[styles.buttonContainer, props.style]}
                  onPress={() => {
                    props.navigation.navigate("Programas");
                  }}
                >
                  <MaterialCommunityIconsIcon
                    name="webhook"
                    style={styles.icon}
                  ></MaterialCommunityIconsIcon>
                  <Text style={styles.title}>Programas</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={[styles.buttonContainer, props.style]}
                  onPress={() => {
                    props.navigation.navigate("Alianzas");
                  }}
                >
                  <MaterialCommunityIconsIcon
                    name="charity"
                    style={styles.icon}
                  ></MaterialCommunityIconsIcon>
                  <Text style={styles.title}>Alianzas</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.groupRow}>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={[styles.buttonContainer, props.style]}
                  onPress={() => {
                    props.navigation.navigate("Impacto Ambiental");
                  }}
                >
                  <MaterialCommunityIconsIcon
                    name="sprout-outline"
                    style={styles.icon}
                  ></MaterialCommunityIconsIcon>
                  <Text style={styles.title}>Impacto Ambiental</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={[styles.buttonContainer, props.style]}
                  onPress={() => {
                    props.navigation.navigate("Impacto Social");
                  }}
                >
                  <MaterialCommunityIconsIcon
                    name="home-group"
                    style={styles.icon}
                  ></MaterialCommunityIconsIcon>
                  <Text style={styles.title}>Impacto Social</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={[styles.buttonContainer, props.style]}
                  onPress={() => {
                    props.navigation.navigate("Simulador");
                  }}
                >
                  <MaterialCommunityIconsIcon
                    name="calculator"
                    style={styles.icon}
                  ></MaterialCommunityIconsIcon>
                  <Text style={styles.title}>Simulador</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.groupRow}>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={[styles.buttonContainer, props.style]}
                  onPress={() => {
                    props.navigation.navigate("Contacto");
                  }}
                >
                  <MaterialCommunityIconsIcon
                    name="phone"
                    style={styles.icon}
                  ></MaterialCommunityIconsIcon>
                  <Text style={styles.title}>Contacto</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={[styles.buttonContainer, props.style]}
                  onPress={() => {
                    props.navigation.navigate("Iniciar Sesión");
                  }}
                >
                  <MaterialCommunityIconsIcon
                    name="login"
                    style={styles.icon}
                  ></MaterialCommunityIconsIcon>
                  <Text style={styles.title}>Iniciar Sesión</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={[styles.buttonContainer, props.style]}
                  onPress={() => {
                    props.navigation.navigate("Registrate");
                  }}
                >
                  <MaterialCommunityIconsIcon
                    name="account-plus-outline"
                    style={styles.icon}
                  ></MaterialCommunityIconsIcon>
                  <Text style={styles.title}>Registrate</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Footer></Footer>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width - 40,
    height: 60,
    alignSelf: "center",
    marginTop: 20,
  },
  scrollArea: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    marginTop: 20,
  },
  scrollArea_contentContainerStyle: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
  },
  margenSeguridad: {
    height: "3%",
    backgroundColor: "rgba(255,255,255,1)",
  },
  containerPrincipal: {
    flex: 1,
    flexDirection: "row",
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
  groupRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 10,
  },
  group: {
    width: 110,
    height: 110,
  },
  buttons: {
    width: 110,
    height: 110,
    marginLeft: 10,
  },
  groupRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  icon: {
    top: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 70,
    height: 70,
    width: 70,
  },
  buttonContainer: {
    backgroundColor: "rgba(198,0,33,1)",
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 90,
    paddingLeft: 15,
    paddingRight: 15,
    width: 100,
    height: 110,
  },
  title: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
    fontFamily: "open-sans-700",
  },
});

export default Untitled;
