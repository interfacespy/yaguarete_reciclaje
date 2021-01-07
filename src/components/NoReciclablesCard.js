import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";

function NoReciclablesCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/NO_Reciclables.jpg")}
        style={styles.image}
      ></Image>
      <Text style={styles.materialesNoReciclamos}>
        MATERIALES QUE NO RECICLAMOS
      </Text>
      <Text style={styles.envases}>
        Envases de tetra pack, papel higiénico sanitario, servilletas, papel
        para fax, etiquetas adhesivas, papel carbónico, papel encerado o
        parafinado, papel aluminio, fotos, radiografías, cajas de agroquímicos
        y/o cualquier papel o cartón que haya estado en contacto con materiales
        orgánicos
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c60021",
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
  materialesNoReciclamos: {
    top: 365,
    left: 15,
    position: "absolute",
    fontFamily: "open-sans-700",
    color: "#FFF",
    width: Dimensions.get("window").width - 40,
    height: 20,
  },
  envases: {
    top: 385,
    left: 15,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "#FFF",
    width: Dimensions.get("window").width - 40,
    height: 140,
  },
});

export default NoReciclablesCard;
