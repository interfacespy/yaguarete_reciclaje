import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  Text,
} from "react-native";
import AlianzasCard from "../components/AlianzasCard";
import YaguareteHeader from "../components/YaguareteHeader";

function Alianzas(props) {
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
          </View>
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
    color: "rgba(54,62,63,1)",
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
    marginTop: 50,
  },
  header: {
    width: Dimensions.get("window").width,
    height: 115,
    backgroundColor: "rgba(193,193,193,1)",
  },
  yaguareteHeader: {
    height: 115,
    width: Dimensions.get("window").width,
    backgroundColor: "rgba(193,193,193,1)",
  },
});

export default Alianzas;
