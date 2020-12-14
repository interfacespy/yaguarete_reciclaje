import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  Text,
} from "react-native";
import YaguareteHeader from "../components/YaguareteHeader";
import ImpactoSocialCard2 from "../components/ImpactoSocialCard2";
import Footer from "../components/Footer";

function ImpactoSocial(props) {
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
            source={require("../assets/images/4_4-Impacto-Social.jpg")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <View style={styles.tittleContent}>
            <Text style={styles.impactoSocial}>IMPACTO SOCIAL</Text>
            <Text style={styles.subtitleStyle}>
              Nuestro compromiso social con el medio ambiente
            </Text>
          </View>
          <ImpactoSocialCard2
            style={styles.impactoSocialCard2}
          ></ImpactoSocialCard2>
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
    top: -10,
  },
  tittleContent: {
    padding: 15,
    flex: 1,
  },
  impactoSocial: {
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
  image: {
    width: Dimensions.get("window").width,
    height: 255,
    // top: -10,
  },

  impactoSocialCard2: {
    width: Dimensions.get("window").width,
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

export default ImpactoSocial;
