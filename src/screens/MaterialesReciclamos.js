import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  Text,
} from "react-native";
import MaterialesReciclamosCard from "../components/MaterialesReciclamosCard";
import Reciclaje1Card from "../components/Reciclaje1Card";
import Reciclamos2 from "../components/Reciclamos2";
import NoReciclablesCard from "../components/NoReciclablesCard";
import YaguareteHeader from "../components/YaguareteHeader";
import Footer from "../components/Footer";

function MaterialesReciclamos(props) {
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
            source={require("../assets/images/Materiales_que_Reciclamos.jpg")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <View style={styles.tittleContent}>
            <Text style={styles.materialesReciclamos}>
              MATERIALES QUE RECICLAMOS
            </Text>
          </View>
          <Reciclaje1Card style={styles.reciclaje1Card}></Reciclaje1Card>
          <Reciclamos2 style={styles.reciclamos2}></Reciclamos2>
          <NoReciclablesCard style={styles.noReciclable}></NoReciclablesCard>
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
  materialesReciclamos: {
    fontFamily: "open-sans-700",
    fontSize: 24,
    color: "#c60021",
    paddingBottom: 12,
    textAlign: "center",
  },
  reciclaje1Card: {
    height: 500,
    width: Dimensions.get("window").width,
    backgroundColor: "#c60021",
  },
  reciclamos2: {
    height: 500,
    width: Dimensions.get("window").width,
    backgroundColor: "#c60021",
  },
  noReciclable: {
    height: 540,
    width: Dimensions.get("window").width,
    backgroundColor: "#c60021",
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

export default MaterialesReciclamos;
