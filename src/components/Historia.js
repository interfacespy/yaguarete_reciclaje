import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

function Historia(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.tittleContent}>
        <Text style={styles.historia}>HISTORIA</Text>
        <Text style={styles.subtitleStyle}>
          Nuestra historia se inicia en Alemania en el año 1931, YAGUARETE
          RECICLAJE, nació en el año 2004 en Ciudad Del Este con el fin de
          captar papeles y cartones en desuso para el proceso de reciclaje y
          producción de nuevos cartones.{"\n"}
          {"\n"}Para la industrialización de todas las líneas de productos en
          Paraguay, se encuentran conformadas empresas que permiten una
          integración vertical, iniciada con: YAGUARETE RECICLAJE, KARTOTEC,
          YAGUARETE CARTONES Y YAGUARETE LOGISTICA.
        </Text>
      </View>
      <Image
        source={require("../assets/images/1_1-Historia.jpg")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(193,193,193,1)",
    overflow: "hidden",
    flex: 1,
  },
  tittleContent: {
    padding: 15,
    flex: 1,
  },
  historia: {
    fontFamily: "open-sans-700",
    fontSize: 24,
    color: "rgba(198,0,33,1)",
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
    top: 250,
    left: 0,
    width: Dimensions.get("window").width,
    height: 255,
    position: "absolute",
    backgroundColor: "rgba(193,193,193,1)",
  },
});

export default Historia;
