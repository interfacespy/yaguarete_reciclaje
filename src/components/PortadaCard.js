import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import GrupoYaguareteCard from "./GrupoYaguareteCard";

function PortadaCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.tittleContent}>
        <Text style={styles.titleStyle}>
          SOMOS LA PRIMERA INDUSTRIA EN EL PAÍS DEDICADA AL RECICLAJE DE PAPEL Y
          CARTÓN
        </Text>
        <Text style={styles.subtitleStyle}>
          Yaguarete Reciclaje cuenta con una red de puntos de compra de papel y
          cartón a nivel nacional. Acércate a nuestros Centros de Acopio, donde
          compramos tus papeles y cartones en desuso!!!
        </Text>
      </View>
      <View style={styles.bodyContent}>
        <GrupoYaguareteCard
          style={styles.grupoYaguareteCard}
        ></GrupoYaguareteCard>
      </View>
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
  titleStyle: {
    fontFamily: "open-sans-700",
    fontSize: 24,
    color: "rgba(54,62,63,1)",
    paddingBottom: 10,
    width: Dimensions.get("window").width - 40,
    alignSelf: "center",
    textAlign: "center",
  },
  subtitleStyle: {
    fontFamily: "open-sans-regular",
    fontSize: 14,
    color: "rgba(54,62,63,1)",
    lineHeight: 16,
    width: Dimensions.get("window").width - 40,
    textAlign: "justify",
  },
  grupoYaguareteCard: {
    height: 320,
    width: 375,
    position: "absolute",
  },

  bodyContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 100,
  },
});

export default PortadaCard;
