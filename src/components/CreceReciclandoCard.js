import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";

function CreceReciclandoCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/creci.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.tittleContent}>
        <Text style={styles.creceReciclando}>CRECÉ RECICLANDO</Text>
        <Text style={styles.subtitleStyle}>
          Programa para empresas o instituciones públicas para la provisión de
          papeles y cartones en desuso que resultan de sus oficinas, talleres o
          sucursales. A través del mismo, Yaguarete Reciclaje ofrece a las
          instituciones adheridas charlas de capacitación y concienciación sobre
          la segregación y clasificación de los residuos en origen, la compra de
          los materiales reciclados, provisión de contenedores para papel
          elaborados del cartón producto del reciclaje, y anualmente hace
          entrega de certificado de Impacto Ambiental por el reciclado, en el
          cual se detalla el ahorro de: emisión de CO2, utilización de Agua,
          espacio físico en mts3 en vertederos, y así también la cantidad de
          árboles que evitaron ser talados.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 1,
    backgroundColor: "rgba(193,193,193,1)",
    overflow: "hidden",
    flex: 1,
  },
  tittleContent: {
    padding: 15,
    flex: 1,
  },
  image: {
    width: 250,
    height: 200,
    alignSelf: "center",
  },
  creceReciclando: {
    fontFamily: "open-sans-700",
    fontSize: 24,
    color: "rgba(255,255,255,1)",
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
});

export default CreceReciclandoCard;
