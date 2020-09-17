import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

function AcercaNosotrosCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.tittleContent}>
        <Text style={styles.acercaNosotros}>ACERCA DE NOSOTROS</Text>
        <Text style={styles.subtitleStyle}>
          Hace más de 40 años, se funda Cartones Yaguarete S.A. en Paraguay, la
          primera industria en el país dedicada al reciclaje de papel y cartón
          en desuso y la producción de Papel y Cartón, aplicando el concepto de
          una economía circular.{"\n"}
          {"\n"}Este proceso que se inicia en YAGUARETE RECICLAJE - Recicladora
          del Este S.A., encargada de recolectar, clasificar y comercializar
          papeles y cartones en desuso para su utilización como materia prima en
          las industrias de fabricación y comercialización.
        </Text>
      </View>
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
  acercaNosotros: {
    fontFamily: "open-sans-700",
    fontSize: 24,
    color: "rgba(255,255,255,1)",
    paddingBottom: 12,
  },
  subtitleStyle: {
    fontFamily: "open-sans-regular",
    fontSize: 14,
    color: "rgba(54,62,63,1)",
    lineHeight: 16,
    width: Dimensions.get("window").width - 40,
    textAlign: "justify",
  },
});

export default AcercaNosotrosCard;
