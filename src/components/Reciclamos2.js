import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";

function Reciclamos2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/Reciclables_21.jpg")}
        style={styles.image}
      ></Image>
      <Text style={styles.mezcla}>MEZCLA</Text>
      <Text style={styles.revistas}>
        Revistas, papel diario, biblioratos sin anillos de metal.
      </Text>
      <Text style={styles.papelBlanco}>PAPEL BLANCO</Text>
      <Text style={styles.hojas}>
        Hojas de oficio, hojas de cuaderno con o sin escritura o impresión
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
  mezcla: {
    top: 365,
    left: 15,
    position: "absolute",
    fontFamily: "open-sans-700",
    color: "rgba(54,62,63,1)",
    width: Dimensions.get("window").width - 40,
    height: 20,
  },
  revistas: {
    top: 385,
    left: 15,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "rgba(54,62,63,1)",
    width: Dimensions.get("window").width - 40,
    height: 20,
  },
  papelBlanco: {
    top: 420,
    left: 15,
    position: "absolute",
    fontFamily: "open-sans-700",
    color: "rgba(54,62,63,1)",
    width: Dimensions.get("window").width - 40,
    height: 20,
  },
  hojas: {
    top: 440,
    left: 15,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "rgba(54,62,63,1)",
    width: Dimensions.get("window").width - 40,
    height: 40,
  },
});

export default Reciclamos2;
