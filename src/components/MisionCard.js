import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

function MisionCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.tittleContent}>
        <Text style={styles.mision}>MISIÓN</Text>
        <Text style={styles.subtitleStyle}>
          Potenciar el reciclaje de PAPELES y CARTONES a través de programas y
          alianzas, dignificando el trabajo de los recolectores para la
          inclusión socioeconómica, en un marco de condiciones dignas de
          trabajo, responsabilidad social y promoción de la cultura de
          reciclaje.
        </Text>
      </View>
      <Image
        source={require("../assets/images/Screenshot_from_2020-09-15_00-08-44.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    overflow: "hidden",
    flex: 1,
  },
  tittleContent: {
    padding: 15,
    flex: 1,
  },
  mision: {
    fontFamily: "open-sans-700",
    fontSize: 24,
    color: "#c60021",
    paddingBottom: 12,
    textAlign: "center",
    alignSelf: "center",
  },
  subtitleStyle: {
    fontFamily: "open-sans-regular",
    fontSize: 14,
    color: "rgba(54,62,63,1)",
    lineHeight: 16,
    width: Dimensions.get("window").width - 40,
    textAlign: "justify",
  },

  image: {
    top: 180,
    left: 0,
    width: Dimensions.get("window").width,
    height: 255,
    position: "absolute",
    backgroundColor: "#FFF",
  },
});

export default MisionCard;
