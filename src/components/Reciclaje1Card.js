import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";

function Reciclaje1Card(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/Reciclables_12.jpg")}
        style={styles.image}
      ></Image>
      <Text style={styles.cartonDePrimera}>CARTÓN DE PRIMERA</Text>
      <Text style={styles.cajasCarton}>Cajas de Cartón sin plastificados.</Text>
      <Text style={styles.cartonDeSegunda}>CARTÓN DE SEGUNDA</Text>
      <Text style={styles.cajasZapato}>
        Cajas de zapato plastificadas, cajas de cereal o yerba, carpetas
        archivadoras.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    overflow: "hidden",
    flex: 1,
  },
  image: {
    minHeight: 210,
    height: 355,
    width: Dimensions.get("window").width,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
  },
  cartonDePrimera: {
    top: 365,
    left: 15,
    position: "absolute",
    fontFamily: "open-sans-700",
    color: "rgba(54,62,63,1)",
    width: Dimensions.get("window").width - 40,
    height: 20,
  },
  cajasCarton: {
    top: 385,
    left: 15,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "rgba(54,62,63,1)",
    width: Dimensions.get("window").width - 40,
    height: 20,
  },
  cartonDeSegunda: {
    top: 420,
    left: 15,
    position: "absolute",
    fontFamily: "open-sans-700",
    color: "rgba(54,62,63,1)",
    width: Dimensions.get("window").width - 40,
    height: 20,
  },
  cajasZapato: {
    top: 440,
    left: 15,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "rgba(54,62,63,1)",
    height: 40,
    width: Dimensions.get("window").width - 40,
  },
});

export default Reciclaje1Card;
