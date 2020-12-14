import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import YaguareteHeader from "../components/YaguareteHeader";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Home(props) {
  return (
    <View style={styles.buttonContainerPrincipal}>
      <View style={styles.margenSeguridad}></View>
      <View style={styles.scrollArea}>
        <ScrollView
          contentbuttonContainerStyle={
            styles.scrollArea_contentbuttonContainerStyle
          }
        >
          <View style={styles.header}>
            <Image
              source={require("../assets/images/logo-blanco.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </View>
          <View>
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
                  <Icon name="package-variant" style={styles.icon}></Icon>
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
                  <Icon name="webhook" style={styles.icon}></Icon>
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
                  <Icon name="charity" style={styles.icon}></Icon>
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
                  <Icon name="sprout-outline" style={styles.icon}></Icon>
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
                  <Icon name="home-group" style={styles.icon}></Icon>
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
                  <Icon name="calculator" style={styles.icon}></Icon>
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
                  <Icon name="phone" style={styles.icon}></Icon>
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
                  <Icon name="login" style={styles.icon}></Icon>
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
                  <Icon name="account-plus-outline" style={styles.icon}></Icon>
                  <Text style={styles.title}>Registrate</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  margenSeguridad: {
    //si
    height: "3%",
    backgroundColor: "rgba(255,255,255,1)",
  },
  image: {
    //si
    width: Dimensions.get("window").width - 40,
    height: 60,
    alignSelf: "center",
    marginTop: 30,
  },
  buttonContainerPrincipal: {
    //si
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
  },
  scrollArea: {
    //si
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    marginTop: 0,
  },
  scrollArea_contentbuttonContainerStyle: {
    //si
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
  },
  image1: {
    width: Dimensions.get("window").width,
    height: 255,
    // top: -10,
  },

  header: {
    //si
    width: Dimensions.get("window").width,
    height: 115,
    backgroundColor: "#c60021",
    marginTop: 0,
  },
});

export default Home;
