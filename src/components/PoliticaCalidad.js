import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

function PoliticaCalidad(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.tittleContent}>
        <Text style={styles.politicaCalidad}>Política de Calidad</Text>
        <Text style={styles.subtitleStyle}>
          • YAGUARETE RECICLAJE impulsa la producción sostenible y consumo
          responsable, fomentando el cuidado del medio ambiente.{"\n"}
          {"\n"}• Nosencargamos de recolectar, clasificar y comercializar
          papeles y cartones en desuso para su utilización como materia prima en
          las industrias.{"\n"}
          {"\n"}• Buscamos liderar el mercado paraguayo de recolección de
          PAPELES Y CARTONES en desuso, satisfaciendo las necesidades de volumen
          y calidad de nuestros clientes.{"\n"}
          {"\n"}• Estamos comprometidos con el cumplimiento de normas,
          estándares y legislaciones vigentes.{"\n"}
          {"\n"}• Fomentamos la mejora continua de todos nuestros procesos para
          la gestión de calidad.{"\n"}
          {"\n"}• Para lograrlo, contamos con colaboradores calificados y
          comprometidos con esta política.{"\n"}
        </Text>
      </View>
      <Image
        source={require("../assets/images/politicaCalidad.jpg")}
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
  politicaCalidad: {
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
    top: 420,
    left: 0,
    width: Dimensions.get("window").width,
    height: 255,
    position: "absolute",
    backgroundColor: "#FFF",
  },
});

export default PoliticaCalidad;
