import React, { Component, useState } from "react";
import { StyleSheet, View, ScrollView, Dimensions, Text } from "react-native";
import CardSimulador from "../components/CardSimulador";
import YaguareteHeader from "../components/YaguareteHeader";
import ResultadoSimulador from "../components/ResultadoSimulador";
import Footer from "../components/Footer";

function Simulador(props) {
  const [litrosAgua, setLitrosAgua] = useState("");
  const [co2, setCo2] = useState("");
  const [vertederos, setVertederos] = useState("");
  const [arboles, setArboles] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.margenSeguridad}></View>
      <View style={styles.scrollArea1}>
        <ScrollView
          contentContainerStyle={styles.scrollArea1_contentContainerStyle}
        >
          <View style={styles.header}>
            <YaguareteHeader
              style={styles.yaguareteHeader}
              navigation={props.navigation}
            ></YaguareteHeader>
          </View>
          <View style={styles.tittleContent}>
            <Text style={styles.simulador}>SIMULADOR</Text>
            <Text style={styles.subtitleStyle}>
              Ingresa la cantidad de kilogramos de papeles y cartones que
              quieras reciclar y verás el impacto positivo que estarás generando
              para el cuidado del Medio Ambiente.
            </Text>
          </View>
          <CardSimulador
            style={styles.cardSimulador}
            setLitrosAgua={setLitrosAgua}
            setCo2={setCo2}
            setVertederos={setVertederos}
            setArboles={setArboles}
          ></CardSimulador>
          {litrosAgua > 0 || co2 > 0 || vertederos > 0 || arboles > 0 ? (
            <ResultadoSimulador
              style={styles.resultadoSimulador}
              litrosAgua={litrosAgua}
              co2={co2}
              vertederos={vertederos}
              arboles={arboles}
            ></ResultadoSimulador>
          ) : (
            <ResultadoSimulador style={styles.invisible}></ResultadoSimulador>
          )}
          <Footer></Footer>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  invisible: {
    display: "none",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
  },
  scrollArea: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    marginTop: 0,
  },
  scrollArea_contentContainerStyle: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
  },
  tittleContent: {
    padding: 15,
    flex: 1,
  },
  simulador: {
    fontFamily: "open-sans-700",
    fontSize: 24,
    color: "#c60021",
    paddingBottom: 10,
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
  cardSimulador: {
    width: Dimensions.get("window").width,
    height: 300,
  },
  resultadoSimulador: {
    width: Dimensions.get("window").width,
    height: 200,
  },
  margenSeguridad: {
    height: "3%",
    backgroundColor: "rgba(255,255,255,1)",
  },
  header: {
    width: Dimensions.get("window").width,
    height: 100,
    backgroundColor: "#c60021",
  },
  yaguareteHeader: {
    height: 100,
    width: Dimensions.get("window").width,
    backgroundColor: "#c60021",
  },
});

export default Simulador;
