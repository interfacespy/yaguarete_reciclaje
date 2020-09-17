import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Image, Dimensions } from "react-native";
import YaguareteHeader from "../components/YaguareteHeader";
import PortadaCard from "../components/PortadaCard";

function Portada(props) {
  return (
    <View style={styles.container}>
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
            source={require("../assets/images/Foto_6.jpg")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <PortadaCard style={styles.portadaCard}></PortadaCard>
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
  image1: {
    width: Dimensions.get("window").width,
    height: 255,
   // top: -10,
  },
  portadaCard: {
    height: 375,
    width: Dimensions.get("window").width,
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

export default Portada;
