import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Dimensions, Text } from "react-native";
import CardSimulador from "../components/CardSimulador";
import YaguareteHeader from "../components/YaguareteHeader";
import ResultadoSimulador from "../components/ResultadoSimulador";

function Simulador(props) {
  return (
    <View style={styles.container}>
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
          <CardSimulador style={styles.cardSimulador}></CardSimulador>
          <ResultadoSimulador
            style={styles.resultadoSimulador}
          ></ResultadoSimulador>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    color: "rgba(54,62,63,1)",
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
  header: {
    width: Dimensions.get("window").width,
    height: 115,
    backgroundColor: "rgba(193,193,193,1)",
    marginTop: 0,
  },
  yaguareteHeader: {
    height: 115,
    width: Dimensions.get("window").width,
    backgroundColor: "rgba(193,193,193,1)",
  },
});

export default Simulador;
