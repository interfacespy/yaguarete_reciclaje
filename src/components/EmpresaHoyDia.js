import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

function EmpresaHoyDia(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.tittleContent}>
        <Text style={styles.empresaHoyDia}>LA EMPRESA HOY EN DÍA</Text>
        <Text style={styles.subtitleStyle}>
          YAGUARETE RECICLAJE, el proceso de Recolección de Papel y Cartón en
          desuso y su reciclado, cuenta con más de 60 colaboradores e
          indirectamente da empleo a más de 3.600 proveedores, quienes a su vez
          consolidan su compra de recolectores individuales de todo el país. Se
          estima que la actividad de recolección da ocupación directa e
          indirecta a más de 20.000 personas en todo el territorio Nacional.
          {"\n"}
          {"\n"}YAGUARETE RECICLAJE, forma parte de la Red del Pacto Global –
          Paraguay, además de trabajar muy de cerca con el Ministerio de la
          Niñez y la Adolescencia, para la erradicación del trabajo Infantil.
          {"\n"}
          {"\n"}Con Ministerio del Ambiente y Desarrollo Sostenible y
          Organizaciones Internacionales como la WWF, GIZ Paraguay, impulsando
          la Producción Sostenible y consumo responsable a fin de garantizar el
          cuidado del medio ambiente.
        </Text>
      </View>
      <Image
        source={require("../assets/images/Screenshot_from_2020-09-14_23-50-48.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c60021",
    overflow: "hidden",
    flex: 1,
  },
  tittleContent: {
    padding: 15,
    flex: 1,
  },
  empresaHoyDia: {
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
    color: "rgba(255,255,255,1)",
    lineHeight: 16,
    width: Dimensions.get("window").width - 40,
    textAlign: "justify",
  },

  image: {
    top: 410,
    left: 0,
    width: Dimensions.get("window").width,
    height: 255,
    position: "absolute",
    backgroundColor: "#c60021",
  },
});

export default EmpresaHoyDia;
