import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import PuntosCompraMap from "./PuntosCompraMap";
import ArtigasCard from "./ArtigasCard";
import Mercado4Card from "./Mercado4Card";
import MercadoAbastoCard from "./MercadoAbastoCard";
import LuqueCard from "./LuqueCard";
import LimpioCard from "./LimpioCard";
import VillaElisaCard from "./VillaElisaCard";
import CdeCard from "./CdeCard";

function PuntosCompraCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.tittleContent}>
        <Text style={styles.puntosDeCompra}>PUNTOS DE COMPRA</Text>
        <Text style={styles.subtitleStyle}>
          Yaguarete Reciclaje cuenta con una red de puntos de compra de papel y
          cartón a nivel nacional. Acércate a nuestros Centros de Acopio, donde
          compramos tus papeles y cartones en desuso!!!
        </Text>
      </View>
      <View style={styles.bodyContent}>
        <PuntosCompraMap style={styles.puntosCompraMap}></PuntosCompraMap>
        <ArtigasCard style={styles.artigasCard}></ArtigasCard>
        <Mercado4Card style={styles.mercado4Card}></Mercado4Card>
        <MercadoAbastoCard style={styles.mercadoAbastoCard}></MercadoAbastoCard>
        <LuqueCard style={styles.luqueCard}></LuqueCard>
        <LimpioCard style={styles.limpioCard}></LimpioCard>
        <VillaElisaCard style={styles.villaElisaCard}></VillaElisaCard>
        <CdeCard style={styles.cdeCard}></CdeCard>
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
  bodyContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: -600,
  },
  puntosDeCompra: {
    fontFamily: "open-sans-700",
    fontSize: 24,
    color: "rgba(54,62,63,1)",
    paddingBottom: 12,
    textAlign: "center",
    alignItems: "center",
  },
  subtitleStyle: {
    fontFamily: "open-sans-regular",
    fontSize: 14,
    color: "rgba(54,62,63,1)",
    lineHeight: 16,
    width: Dimensions.get("window").width - 40,
    textAlign: "justify",
  },
  puntosCompraMap: {
    width: Dimensions.get("window").width - 40,
    height: 300,
  },
  artigasCard: {
    height: 90,
    width: Dimensions.get("window").width - 40,
    position: "absolute",
    top: 459,
  },
  mercado4Card: {
    height: 90,
    width: Dimensions.get("window").width - 40,
    position: "absolute",
    top: 559,
  },
  mercadoAbastoCard: {
    top: 659,
    width: Dimensions.get("window").width - 40,
    height: 90,
    position: "absolute",
  },
  luqueCard: {
    top: 759,
    width: Dimensions.get("window").width - 40,
    height: 90,
    position: "absolute",
  },
  limpioCard: {
    top: 859,
    width: Dimensions.get("window").width - 40,
    height: 90,
    position: "absolute",
  },
  villaElisaCard: {
    top: 959,
    width: Dimensions.get("window").width - 40,
    height: 90,
    position: "absolute",
  },
  cdeCard: {
    height: 90,
    width: Dimensions.get("window").width - 40,
    position: "absolute",
    top: 1059,
  },
});

export default PuntosCompraCard;
