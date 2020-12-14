import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  Text,
} from "react-native";
import CrecemosReciclandoCard from "../components/CrecemosReciclandoCard";
import CreceReciclandoCard from "../components/CreceReciclandoCard";
import YaguareteHeader from "../components/YaguareteHeader";
import Footer from "../components/Footer";

function Programas(props) {
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
            source={require("../assets/images/Programas.jpg")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <View style={styles.tittleContent}>
            <Text style={styles.programas}>PROGRAMAS</Text>
          </View>
          <CrecemosReciclandoCard
            style={styles.crecemosReciclando}
          ></CrecemosReciclandoCard>
          <CreceReciclandoCard
            style={styles.creceReciclando}
          ></CreceReciclandoCard>
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
  programas: {
    fontFamily: "open-sans-700",
    fontSize: 24,
    color: "#c60021",
    paddingBottom: 12,
    textAlign: "center",
  },
  crecemosReciclando: {
    width: Dimensions.get("window").width,
    borderWidth: 1,
    borderColor: "#c60021",
  },
  creceReciclando: {
    width: Dimensions.get("window").width,
    borderWidth: 1,
    borderColor: "#c60021",
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

export default Programas;
