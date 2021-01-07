import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  Text,
} from "react-native";
import AcercaNosotrosCard from "../components/AcercaNosotrosCard";
import Historia from "../components/Historia";
import EmpresaHoyDia from "../components/EmpresaHoyDia";
import VisionCard2 from "../components/VisionCard2";
import MisionCard from "../components/MisionCard";
import PoliticaCalidad from "../components/PoliticaCalidad";
import YaguareteHeader from "../components/YaguareteHeader";
import Footer from "../components/Footer";

function Nosotros(props) {
  return (
    <View style={styles.container}>
      <View style={styles.margenSeguridad}></View>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.header}>
            <YaguareteHeader
              style={styles.yaguareteHeader}
              navigation={props.navigation}
            ></YaguareteHeader>
          </View>
          <Image
            source={require("../assets/images/1_1-Acerca-de-Nosotros1.jpg")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <View style={styles.tittleContent}>
            <Text style={styles.quienesSomos}>¿QUIÉNES SOMOS?</Text>
          </View>
          <AcercaNosotrosCard style={styles.nosotros}></AcercaNosotrosCard>
          <Historia style={styles.historia}></Historia>
          <EmpresaHoyDia style={styles.empresaHoyDia}></EmpresaHoyDia>
          <PoliticaCalidad style={styles.politicaCalidad}></PoliticaCalidad>
          <VisionCard2 style={styles.visionCard}></VisionCard2>
          <MisionCard style={styles.misionCard}></MisionCard>
          <Footer></Footer>
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
  image: {
    width: Dimensions.get("window").width,
    height: 255,
    // top: -10,
  },
  tittleContent: {
    padding: 15,
    flex: 1,
  },
  quienesSomos: {
    fontFamily: "open-sans-700",
    fontSize: 24,
    //color: "rgba(54,62,63,1)",
    color: "#c60021",
    paddingBottom: 12,
    textAlign: "justify",
  },
  nosotros: {
    width: Dimensions.get("window").width,
    height: 290,
  },
  empresaHoyDia: {
    width: Dimensions.get("window").width,
    height: 685,
  },
  politicaCalidad: {
    width: Dimensions.get("window").width,
    height: 690,
  },
  misionCard: {
    height: 455,
    width: Dimensions.get("window").width,
  },
  historia: {
    width: Dimensions.get("window").width,
    height: 510,
  },
  visionCard: {
    height: 410,
    width: Dimensions.get("window").width,
  },
  margenSeguridad: {
    height: "5%",
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

export default Nosotros;
