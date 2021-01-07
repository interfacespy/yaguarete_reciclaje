import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

function VisionCard2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.tittleContent}>
        <Text style={styles.vision}>VISIÓN</Text>
        <Text style={styles.subtitleStyle}>
          Liderar el mercado paraguayo de reciclaje de PAPELES y CARTONES,
          impulsando la cultura del reciclaje mediante una economía circular
          sostenible y sustentable.
        </Text>
      </View>
      <Image
        source={require("../assets/images/Screenshot_from_2020-09-15_00-03-30.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "rgba(193,193,193,1)",
    backgroundColor: "#c60021",
    overflow: "hidden",
    flex: 1,
  },
  tittleContent: {
    padding: 15,
    flex: 1,
  },
  vision: {
    fontFamily: "open-sans-700",
    fontSize: 24,
    //color: "rgba(198,0,33,1)",
    color: "#FFF",
    paddingBottom: 12,
    textAlign: "center",
    alignSelf: "center",
  },
  subtitleStyle: {
    fontFamily: "open-sans-regular",
    fontSize: 14,
    //color: "rgba(54,62,63,1)",
    color: "#FFF",
    lineHeight: 16,
    width: Dimensions.get("window").width - 40,
    textAlign: "justify",
  },

  image: {
    top: 135,
    left: 0,
    width: Dimensions.get("window").width,
    height: 255,
    position: "absolute",
    backgroundColor: "#c60021",
  },
});

export default VisionCard2;
