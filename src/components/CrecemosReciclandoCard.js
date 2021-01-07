import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";

function CrecemosReciclandoCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/logo-crecemos.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.tittleContent}>
        <Text style={styles.crecemosReciclando}>CRECEMOS RECICLANDO</Text>
        <Text style={styles.subtitleStyle}>
          Hemos desarrollado el Programa CRECEMOS RECICLANDO, respaldado por el
          Banco DEG (Deutsche Entwicklungsgesellschaft), para promover en
          conjunto con todas personas interesadas la preservación del medio
          ambiente y la utilización consciente y racional de los recursos;
          instalando la cultura del reciclaje en todos los que la integran, a
          través de la separación de éstos materiales en origen; Programa
          declarado de Interés Ambiental por el Ministerio del Ambiente y
          Desarrollo Sostenible y de interés Municipal por la Municipalidad de
          Asunción.{"\n"}
          {"\n"}Dentro del marco de la Ley de Residuos Sólidos (N° 3956/2009),
          uno de los objetivos de este programa “Crecemos reciclando” es
          aumentar la segregación (clasificación) de los residuos sólidos en
          origen, especialmente papel y cartón en desuso, a fin de recuperar la
          mayor cantidad de residuos que pueden ser re-utilizados como materia
          prima en procesos productivos, generado un impacto ambiental positivo.
          {"\n"}
          {"\n"}Programa enfocado a fomentar la clasificación de los residuos en
          origen, especialmente papel y cartón en desuso y fortalecer a los
          recicladores.
        </Text>
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
  crecemosReciclando: {
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
    color: "rgba(54,62,63,1) ",
    lineHeight: 16,
    width: Dimensions.get("window").width - 40,
    textAlign: "justify",
  },
  image: {
    width: 250,
    height: 150,
    alignSelf: "center",
  },
});

export default CrecemosReciclandoCard;
