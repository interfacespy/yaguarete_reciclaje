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
import Footer from "../components/Footer";

function Alianzas(props) {
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
            source={require("../assets/images/3_3-Alianzas-Estrategicas1.jpg")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <View style={styles.tittleContent}>
            <Text style={styles.alianzas}>ALIANZAS</Text>
            <Image
              source={require("../assets/images/deg2.png")}
              resizeMode="contain"
              style={styles.deg}
            ></Image>
            <Image
              source={require("../assets/images/fp1.png")}
              resizeMode="contain"
              style={styles.fp}
            ></Image>
            <Image
              source={require("../assets/images/giz1.gif")}
              resizeMode="contain"
              style={styles.giz}
            ></Image>
            <Image
              source={require("../assets/images/mades1.png")}
              resizeMode="contain"
              style={styles.mades}
            ></Image>
            <Image
              source={require("../assets/images/wwf1.png")}
              resizeMode="contain"
              style={styles.wwf}
            ></Image>
            <Image
              source={require("../assets/images/MTESS.png")}
              resizeMode="contain"
              style={styles.mtees}
            ></Image>
          </View>
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
    //top: -10,
  },
  tittleContent: {
    padding: 15,
    flex: 1,
  },
  alianzas: {
    fontFamily: "open-sans-700",
    fontSize: 24,
    color: "#c60021",
    paddingBottom: 12,
    textAlign: "center",
  },
  deg: {
    width: 250,
    height: 100,
  },
  fp: {
    width: 250,
    height: 100,
    marginTop: 50,
  },
  giz: {
    width: 250,
    height: 100,
    marginTop: 50,
  },
  mades: {
    width: 250,
    height: 100,
  },
  wwf: {
    width: 250,
    height: 200,
  },
  mtees: {
    width: 250,
    height: 100,
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

export default Alianzas;
