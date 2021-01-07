import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Untitled(props) {
  return (
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
          <TouchableOpacity style={[styles.buttonContainer, props.style]}>
            <MaterialCommunityIconsIcon
              name="webhook"
              style={styles.icon}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.title}>Programas</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={[styles.buttonContainer, props.style]}>
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
              name="phone"
              style={styles.icon}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.title}>Contacto</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={[styles.buttonContainer, props.style]}>
            <MaterialCommunityIconsIcon
              name="login"
              style={styles.icon}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.title}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={[styles.buttonContainer, props.style]}>
            <MaterialCommunityIconsIcon
              name="account-plus-outline"
              style={styles.icon}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.title}>Registrate</Text>
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
          <TouchableOpacity style={[styles.buttonContainer, props.style]}>
            <MaterialCommunityIconsIcon
              name="home-group"
              style={styles.icon}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.title}>Impacto Social</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={[styles.buttonContainer, props.style]}>
            <MaterialCommunityIconsIcon
              name="calculator"
              style={styles.icon}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.title}>Simulador</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  group: {
    width: 105,
    height: 110,
  },
  buttons: {
    width: 105,
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
    fontSize: 80,
    height: 80,
    width: 80,
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
    fontSize: 14,
    fontFamily: "open-sans-700",
  },
});

export default Untitled;
